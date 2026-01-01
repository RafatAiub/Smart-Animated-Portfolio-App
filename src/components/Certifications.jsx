import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAws, FaBrain, FaEthereum, FaAtom } from 'react-icons/fa'

const certifications = [
  {
    name: 'AWS Cloud Architect Certification',
    year: '2025',
    icon: <FaAws />,
    color: '#FF9900'
  },
  {
    name: 'TensorFlow Developer Certificate',
    year: '2025',
    icon: <FaBrain />,
    color: '#FF6F00'
  },
  {
    name: 'Ethereum Smart Contract Development',
    year: '2025',
    icon: <FaEthereum />,
    color: '#627EEA'
  },
  {
    name: 'Quantum Computing Fundamentals',
    year: '2025',
    icon: <FaAtom />,
    color: '#00D9FF'
  }
]

function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section certifications-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="certification-card"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
              style={{ '--cert-color': cert.color }}
            >
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
              <h3>{cert.name}</h3>
              <span className="cert-year">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

