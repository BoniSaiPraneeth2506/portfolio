import { motion } from 'framer-motion'
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar
} from 'recharts'
import channelData from '../../data/youtubeStats.json'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(10, 10, 18, 0.95)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '12px',
        padding: '12px 16px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <p style={{ color: '#8B8FA3', fontSize: '0.78rem', marginBottom: 4 }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, fontWeight: 700, fontSize: '1rem' }}>
            {entry.name}: {typeof entry.value === 'number' 
              ? entry.value >= 1000000 
                ? (entry.value / 1000000).toFixed(1) + 'M'
                : entry.value >= 1000 
                  ? (entry.value / 1000).toFixed(1) + 'K'
                  : entry.name === 'Revenue' ? '$' + entry.value.toFixed(2) : entry.value
              : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const likeRatioData = [
  { name: 'Like Ratio', value: channelData.lifetime.avgLikeRatio, fill: '#4f8cff' }
]

export default function AnalyticsDashboard() {
  return (
    <section className="analytics-section" id="analytics">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Analytics Dashboard 📊</h2>
          <p className="section-subtitle">
            Deep dive into the data behind {channelData.lifetime.totalViews.toLocaleString()} views across {channelData.channel.name}.
          </p>
        </motion.div>

        <div className="charts-grid">
          {/* Growth Curve */}
          <motion.div
            className="chart-card full-width"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="chart-header">
              <h3 className="chart-title">📈 Growth Curve — Monthly Views</h3>
              <span className="chart-badge">Lifetime</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={channelData.monthlyViews}>
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f8cff" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#4f8cff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#555770', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
                  tickLine={false}
                  interval={2}
                />
                <YAxis
                  tick={{ fill: '#555770', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
                  tickLine={false}
                  tickFormatter={(v) => v >= 1000000 ? (v/1000000).toFixed(1)+'M' : v >= 1000 ? (v/1000)+'K' : v}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="views"
                  name="Views"
                  stroke="#4f8cff"
                  strokeWidth={2}
                  fill="url(#viewsGradient)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            className="chart-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="chart-header">
              <h3 className="chart-title">💰 Revenue Over Time</h3>
              <span className="chart-badge">${channelData.lifetime.estimatedRevenue}</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={channelData.monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#6B7280', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={false}
                  interval={2}
                />
                <YAxis
                  tick={{ fill: '#6B7280', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={false}
                  tickFormatter={(v) => '$' + v}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="#00d4ff"
                  strokeWidth={2}
                  dot={{ fill: '#00d4ff', r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, stroke: '#00d4ff', strokeWidth: 2 }}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Top Videos Bar */}
          <motion.div
            className="chart-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="chart-header">
              <h3 className="chart-title">🔥 Top Videos by Views</h3>
              <span className="chart-badge">Best Performers</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={channelData.topVideos
                  .filter(v => v.views > 100)
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 5)
                  .map(v => ({
                    name: v.title.length > 20 ? v.title.substring(0, 20) + '…' : v.title,
                    views: v.views,
                    fullTitle: v.title
                  }))}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  type="number"
                  tick={{ fill: '#6B7280', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={false}
                  tickFormatter={(v) => v >= 1000 ? (v/1000).toFixed(0)+'K' : v}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={false}
                  width={130}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="views"
                  name="Views"
                  fill="#4f8cff"
                  radius={[0, 6, 6, 0]}
                  animationDuration={2000}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Like Ratio */}
          <motion.div
            className="chart-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="chart-header" style={{ width: '100%' }}>
              <h3 className="chart-title">❤️ Average Like Ratio</h3>
              <span className="chart-badge">{channelData.lifetime.avgLikeRatio}%</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="90%"
                barSize={20}
                data={likeRatioData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  background={{ fill: 'rgba(255,255,255,0.03)' }}
                  dataKey="value"
                  cornerRadius={10}
                  animationDuration={2000}
                />
                <text
                  x="50%"
                  y="48%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#EEEEF0"
                  style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit' }}
                >
                  {channelData.lifetime.avgLikeRatio}%
                </text>
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#555770"
                  style={{ fontSize: '0.8rem', fontWeight: 500 }}
                >
                  Like Rate
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

