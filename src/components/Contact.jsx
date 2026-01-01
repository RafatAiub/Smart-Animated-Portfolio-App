import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'tanvirmahtab1996@gmail.com',
    link: 'mailto:tanvirmahtab1996@gmail.com',
    color: '#ea4335'
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+8801606588348',
    link: 'tel:+8801606588348',
    color: '#34a853'
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    link: '#',
    color: '#4285f4'
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tanvir-mahtab-rafat',
    link: 'https://linkedin.com/in/tanvir-mahtab-rafat',
    color: '#0077b5'
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/RafatAiub',
    link: 'https://github.com/RafatAiub',
    color: '#333'
  }
]

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:tanvirmahtab1996@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
  }

  return (
    <section className="section contact-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Whether you're a startup, enterprise, or individual looking for expert guidance in Full Stack Development, 
              Cloud Architecture, AI/ML, or Blockchain solutions, let's connect and build something extraordinary together.
            </p>
            <div className="contact-cta">
              <h3>Let's Work Together</h3>
              <p>Available for:</p>
              <ul>
                <li>🏢 Enterprise Consulting & Architecture</li>
                <li>🚀 Startup Technical Leadership</li>
                <li>💼 Full-Time Senior Positions</li>
                <li>📚 Technical Training & Workshops</li>
                <li>🤝 Open Source Contributions</li>
              </ul>
            </div>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  style={{ '--item-color': item.color }}
                >
                  <div className="contact-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

