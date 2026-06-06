import { useRef } from 'react'
import { motion } from 'framer-motion'
import channelData from '../../data/youtubeStats.json'

function formatViews(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}

export default function TopVideos() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 330,
        behavior: 'smooth'
      })
    }
  }

  const sorted = [...channelData.topVideos]
    .filter(v => v.views > 100)
    .sort((a, b) => b.views - a.views)

  return (
    <section className="videos-section" id="videos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}
        >
          <div>
            <h2 className="section-title">Top Content 🎬</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              The most-watched videos that drove millions of views. Scroll to explore →
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button
              onClick={() => scroll(-1)}
              className="btn btn-outline"
              style={{ padding: '10px 16px', fontSize: '1.2rem' }}
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              className="btn btn-outline"
              style={{ padding: '10px 16px', fontSize: '1.2rem' }}
            >
              →
            </button>
          </div>
        </motion.div>

        <div className="videos-scroll" ref={scrollRef}>
          {sorted.map((video, i) => (
            <motion.div
              className="video-card"
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="video-thumbnail">
                <span style={{ fontSize: '3rem', opacity: 0.3 }}>▶</span>
                <span className="video-duration">{video.duration}</span>
                {video.status && (
                  <span style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    background: 'rgba(249, 115, 22, 0.9)',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontSize: '0.7rem',
                    fontWeight: 600
                  }}>
                    {video.status}
                  </span>
                )}
              </div>
              <div className="video-info">
                <div className="video-title">{video.title}</div>
                <div className="video-meta">
                  <span>👁️ {formatViews(video.views)}</span>
                  <span>❤️ {formatViews(video.likes)}</span>
                  <span>💬 {video.comments}</span>
                </div>
                <div className="video-meta" style={{ marginTop: 6 }}>
                  <span>👍 {video.likeRatio}%</span>
                  <span>🏷️ {video.type}</span>
                </div>
                <div className="video-date">{video.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

