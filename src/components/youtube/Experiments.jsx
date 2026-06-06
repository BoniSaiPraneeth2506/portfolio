import { motion } from 'framer-motion'
import channelData from '../../data/youtubeStats.json'

export default function Experiments() {
  return (
    <section className="experiments-section" id="experiments">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experiments & Learnings 🧪</h2>
          <p className="section-subtitle">
            Data-driven decisions — what failed, what worked, and the insights behind each pivot.
          </p>
        </motion.div>

        <div className="experiments-grid">
          <div className="experiments-column">
            <h3 style={{ color: '#FF0000' }}>❌ What Failed</h3>
            {channelData.experiments.failed.map((item, i) => (
              <motion.div
                className="experiment-item failed"
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="experiment-title">{item.title}</div>
                <div className="experiment-result">{item.result}</div>
              </motion.div>
            ))}
          </div>

          <div className="experiments-column">
            <h3 style={{ color: '#10B981' }}>✅ What Worked</h3>
            {channelData.experiments.worked.map((item, i) => (
              <motion.div
                className="experiment-item worked"
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="experiment-title">{item.title}</div>
                <div className="experiment-result">{item.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
