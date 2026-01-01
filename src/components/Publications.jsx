import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBook, FaCode, FaMobileAlt, FaFire } from 'react-icons/fa'

const publications = [
  {
    title: 'Deep Learning on Web',
    status: 'Work in Progress',
    publisher: 'Packt Publishing',
    tech: ['Django', 'Python', 'AWS'],
    icon: <FaCode />,
    color: '#6366f1'
  },
  {
    title: 'Deep Learning on Mobile Devices',
    status: 'Work in Progress',
    publisher: 'Packt Publishing',
    tech: ['Flutter', 'TensorFlow', 'Firebase'],
    icon: <FaMobileAlt />,
    color: '#8b5cf6'
  }
]

function Publications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section publications-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Publications</span>
        </motion.h2>

        <div className="publications-grid">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              className="publication-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{ '--pub-color': pub.color }}
            >
              <div className="publication-icon" style={{ color: pub.color }}>
                {pub.icon}
              </div>
              <div className="publication-badge">
                <FaFire />
                <span>{pub.status}</span>
              </div>
              <h3>{pub.title}</h3>
              <p className="publication-publisher">Published by {pub.publisher}</p>
              <div className="publication-tech">
                <strong>Technologies:</strong>
                <div className="tech-list">
                  {pub.tech.map((tech) => (
                    <span key={tech} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

