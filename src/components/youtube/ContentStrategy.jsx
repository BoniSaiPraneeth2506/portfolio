import { motion } from 'framer-motion'
import channelData from '../../data/youtubeStats.json'

export default function ContentStrategy() {
  return (
    <section className="strategy-section" id="strategy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Content Strategy 🧠</h2>
          <p className="section-subtitle">
            The systematic approach behind creating content that consistently reaches millions.
          </p>
        </motion.div>

        <div className="strategy-grid">
          {channelData.strategy.map((item, i) => (
            <motion.div
              className="strategy-card"
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
            >
              <span className="strategy-icon">{item.icon}</span>
              <h3 className="strategy-title">{item.title}</h3>
              <p className="strategy-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
