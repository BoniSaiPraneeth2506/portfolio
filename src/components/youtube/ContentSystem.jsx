import { motion } from 'framer-motion'
import channelData from '../../data/youtubeStats.json'

export default function ContentSystem() {
  return (
    <section className="system-section" id="system">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-title">Content System ⚙️</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            The repeatable 6-step pipeline behind every viral video — from idea to impact.
          </p>
        </motion.div>

        <div className="system-pipeline">
          {channelData.contentSystem.map((step, i) => (
            <>
              <motion.div
                className="system-step"
                key={`step-${i}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="system-step-header">
                  <div className="system-step-number">{step.step}</div>
                  <span className="system-step-icon">{step.icon}</span>
                </div>
                <div className="system-step-body">
                  <h4 className="system-step-title">{step.title}</h4>
                  <p className="system-step-desc">{step.description}</p>
                </div>
              </motion.div>
              {i < channelData.contentSystem.length - 1 && (
                <motion.span
                  className="system-arrow"
                  key={`arrow-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2 }}
                >
                  →
                </motion.span>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
