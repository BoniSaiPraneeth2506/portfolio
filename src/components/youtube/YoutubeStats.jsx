import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import channelData from '../../data/youtubeStats.json'

function AnimatedNumber({ value, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(eased * value)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, value, duration])

  const formatValue = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return Math.floor(num).toLocaleString()
  }

  return (
    <span ref={ref} className="stat-number">
      {prefix}{formatValue(count)}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: '👁️',
    value: channelData.lifetime.totalViews,
    label: 'Total Views',
    color: '#4f8cff'
  },
  {
    icon: '⏱️',
    value: channelData.lifetime.watchTimeHours,
    label: 'Watch Hours',
    color: '#00d4ff'
  },
  {
    icon: '👥',
    value: channelData.lifetime.subscribers,
    label: 'Subscribers',
    color: '#4f8cff'
  },
  {
    icon: '💰',
    value: channelData.lifetime.estimatedRevenue,
    label: 'Revenue',
    prefix: '$',
    color: '#00d4ff'
  }
]

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Lifetime Stats</h2>
          <p className="section-subtitle">
            Numbers that tell the story of {channelData.channel.name}'s growth — from zero to nearly 100 million views.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-content">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  duration={2500 + i * 300}
                />
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

