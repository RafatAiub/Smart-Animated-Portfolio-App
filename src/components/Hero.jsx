import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { Suspense } from 'react'
import AdvancedHeroScene from './three/AdvancedHeroScene'
import { useTheme } from '../hooks/useTheme.jsx'

function Hero() {
  const { theme } = useTheme()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="hero-section">
      <div className="hero-3d-container">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <AdvancedHeroScene theme={theme} />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-text">Full Stack Developer</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="gradient-text">Tanvir Mahtab Rafat</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Building the future with <span className="highlight">Cloud Computing</span>,{' '}
          <span className="highlight">AI/ML</span>, and{' '}
          <span className="highlight">Blockchain</span> technologies
        </motion.p>

        <motion.p className="hero-location" variants={itemVariants}>
          📍 Dhaka, Bangladesh
        </motion.p>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a
            href="https://linkedin.com/in/tanvir-mahtab-rafat"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="social-link"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/RafatAiub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="social-link"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:tanvirmahtab1996@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="social-link"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="tel:+8801606588348"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="social-link"
          >
            <FaPhone />
          </motion.a>
        </motion.div>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.a
            href="#contact"
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

