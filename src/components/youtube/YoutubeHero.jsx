import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleField from './ParticleField'
import channelData from '../../data/youtubeStats.json'

function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(!startOnView)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnView) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!started) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return { count, ref }
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toLocaleString()
}

export default function Hero() {
  const [liveSubs, setLiveSubs] = useState(channelData.lifetime.subscribers)
  const [liveViews, setLiveViews] = useState(channelData.lifetime.totalViews)
  const [isLive, setIsLive] = useState(false)

  const subsCounter = useCountUp(liveSubs, 2500)
  const viewsCounter = useCountUp(liveViews, 3000)

  // Try to fetch live stats
  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        const res = await fetch(
          `https://mixerno.space/api/youtube-channel-counter/current/${channelData.channel.channelId}`
        )
        if (res.ok) {
          const data = await res.json()
          if (data.counts) {
            const apiSubs = data.counts.find(c => c.value && c.id === 'subscribers')
            const apiViews = data.counts.find(c => c.value && c.id === 'views')
            if (apiSubs) setLiveSubs(apiSubs.count)
            if (apiViews) setLiveViews(apiViews.count)
            setIsLive(true)
          }
        }
      } catch (err) {
        console.log('Live stats unavailable, using static data')
        setIsLive(false)
      }
    }

    fetchLiveStats()
    const interval = setInterval(fetchLiveStats, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-canvas">
        <ParticleField />
      </div>
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={process.env.PUBLIC_URL + channelData.channel.profileImage}
          alt={channelData.channel.name}
          className="hero-profile"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        />

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span>▶</span> YouTube Content Creator
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I'm <span className="highlight">Praneeth</span> 👋
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {channelData.channel.description}
        </motion.p>

        <motion.div
          className="hero-live-stats"
          ref={subsCounter.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="live-stat-card">
            <div className="live-indicator">
              <span className="live-dot" />
              {isLive ? 'LIVE' : 'STATS'}
            </div>
            <div className="live-stat-value gradient-text">
              {formatNumber(subsCounter.count)}
            </div>
            <div className="live-stat-label">Subscribers</div>
          </div>

          <div className="live-stat-card" ref={viewsCounter.ref}>
            <div className="live-indicator">
              <span className="live-dot" />
              {isLive ? 'LIVE' : 'STATS'}
            </div>
            <div className="live-stat-value gradient-text">
              {formatNumber(viewsCounter.count)}
            </div>
            <div className="live-stat-label">Total Views</div>
          </div>

        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#journey" className="btn btn-primary">
            🚀 Watch My Journey
          </a>
          <a href="#analytics" className="btn btn-outline">
            📊 See Analytics
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
