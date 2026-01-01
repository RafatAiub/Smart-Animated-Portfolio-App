import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  )
}

function FloatingOrbs() {
  const orbs = []
  for (let i = 0; i < 5; i++) {
    orbs.push(
      <Sphere key={i} args={[0.1, 32, 32]} position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </Sphere>
    )
  }
  return <>{orbs}</>
}

function Hero() {
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
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <AnimatedSphere />
          <FloatingOrbs />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
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

