import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAws, FaBrain, FaEthereum, FaAtom, FaExternalLinkAlt, FaGraduationCap, FaCheckCircle } from 'react-icons/fa'
import { certificationLinks } from '../data/links'

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

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.8 }}
        >
          Click on certifications to explore official certification programs and learning paths
        </motion.p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const links = certificationLinks[cert.name] || {}
            return (
              <motion.a
                key={cert.name}
                href={links.official || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-card"
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                style={{ '--cert-color': cert.color, textDecoration: 'none' }}
              >
                <div className="cert-icon" style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                <div className="cert-verified">
                  <FaCheckCircle /> Verified
                </div>
                <h3>{cert.name}</h3>
                <span className="cert-year">{cert.year}</span>
                <div className="cert-links">
                  {links.official && (
                    <motion.span
                      className="cert-link-item"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt /> Official
                    </motion.span>
                  )}
                  {links.learn && (
                    <motion.span
                      className="cert-link-item"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGraduationCap /> Learn
                    </motion.span>
                  )}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
