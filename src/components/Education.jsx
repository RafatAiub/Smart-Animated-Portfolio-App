import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa'

function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section education-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="education-icon">
            <FaGraduationCap />
          </div>
          <div className="education-content">
            <h3>B.Sc. in Computer Science & Engineering</h3>
            <p className="education-institution">American International University – Bangladesh (AIUB)</p>
            <div className="education-details">
              <span className="education-period">
                <FaCalendarAlt className="icon" />
                Jan 2017 – Jan 2022
              </span>
              <span className="education-gpa">
                <FaAward className="icon" />
                GPA: 3.65 / 4.00
              </span>
            </div>
            <div className="education-focus">
              <strong>Focus Areas:</strong> Cloud Computing, Blockchain, and AI Algorithms
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

