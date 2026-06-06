import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 800 }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorOptions = [
      new THREE.Color('#E23645'),
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#6366F1'),
      new THREE.Color('#3B82F6'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 0.5
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = time * 0.02
    mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1

    const positions = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.002
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingOrb({ position, color, speed = 1 }) {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.getElapsedTime() * speed
    mesh.current.position.y = position[1] + Math.sin(time) * 0.5
    mesh.current.position.x = position[0] + Math.cos(time * 0.7) * 0.3
  })

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.4} color="#8B5CF6" />
      <pointLight position={[-5, -5, 5]} intensity={0.25} color="#E23645" />
      <Particles count={600} />
      <FloatingOrb position={[-3, 2, -2]} color="#E23645" speed={0.6} />
      <FloatingOrb position={[3, -1, -3]} color="#8B5CF6" speed={0.8} />
      <FloatingOrb position={[0, 3, -4]} color="#6366F1" speed={0.5} />
      <FloatingOrb position={[-2, -2, -1]} color="#3B82F6" speed={0.7} />
    </Canvas>
  )
}
