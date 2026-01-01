import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRocket, FaBrain, FaCode, FaCloud } from 'react-icons/fa'

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const values = [
    { icon: <FaRocket />, title: 'Innovation', desc: 'Embracing cutting-edge technologies' },
    { icon: <FaBrain />, title: 'AI-Driven', desc: 'Leveraging AI for smarter solutions' },
    { icon: <FaCode />, title: 'Quality Code', desc: 'Clean, scalable, and maintainable' },
    { icon: <FaCloud />, title: 'Cloud-First', desc: 'Scalable cloud-native architectures' }
  ]

  return (
    <section className="section about-section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Career <span className="gradient-text">Objective</span>
          </motion.h2>

          <motion.div className="about-content" variants={itemVariants}>
            <p className="about-text">
              As a passionate <strong>Full Stack Developer</strong> with a focus on cloud computing, 
              AI/ML, and decentralized technologies, I aim to design and develop scalable, secure, 
              and futuristic applications. I am committed to staying ahead of the curve by embracing 
              emerging technologies such as <strong>quantum computing</strong>, <strong>Web3</strong>, 
              <strong> AI-driven development</strong>, and <strong>edge computing</strong> to create 
              innovative solutions that shape the future of technology.
            </p>
          </motion.div>

          <motion.div className="values-grid" variants={itemVariants}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

