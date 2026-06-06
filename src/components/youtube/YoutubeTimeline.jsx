import { motion } from 'framer-motion'
import channelData from '../../data/youtubeStats.json'

const typeColors = {
  milestone: 'milestone',
  viral: 'viral',
  challenge: 'challenge',
  strategy: 'strategy',
  current: 'current'
}

export default function Timeline() {
  return (
    <section className="timeline-section" id="journey">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">The Journey 🚀</h2>
          <p className="section-subtitle">
            From the first upload to 99M+ views — every milestone, every challenge, every pivot that shaped this channel.
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {channelData.timeline.map((item, i) => (
            <motion.div
              className="timeline-item"
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`timeline-dot ${typeColors[item.type] || ''}`} />
              <div className="timeline-card">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
