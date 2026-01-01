import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    title: 'Senior Backend Developer',
    company: 'EATL',
    location: 'Dhaka',
    period: 'Dec 2022 – Present',
    achievements: [
      'Designed and implemented scalable microservices with Node.js and Kubernetes',
      'Deployed AWS Lambda functions to reduce infrastructure costs and scale dynamically',
      'Integrated AI models using TensorFlow for real-time recommendations in production systems',
      'Led the development of blockchain-based solutions for secure financial transactions'
    ],
    tech: ['Node.js', 'Kubernetes', 'AWS Lambda', 'TensorFlow', 'Blockchain']
  },
  {
    title: 'Full Stack Developer (Contract)',
    company: 'NTRCA',
    location: 'Dhaka',
    period: 'Mar 2022 – Nov 2022',
    achievements: [
      'Developed secure role-based dashboards using React.js and Node.js',
      'Implemented Ethereum-based voting systems for transparency and security',
      'Optimized backend performance by reducing API response times by 40% with GraphQL'
    ],
    tech: ['React.js', 'Node.js', 'Ethereum', 'GraphQL']
  },
  {
    title: 'Backend Developer (Freelance)',
    company: 'AmarBin Project',
    location: 'Remote',
    period: 'Jan 2021 – Feb 2022',
    achievements: [
      'Built a full-stack solution for smart waste management using Node.js, MongoDB, and IoT',
      'Integrated IoT sensors to track real-time waste collection data',
      'Improved system performance by implementing Redis caching for frequent queries'
    ],
    tech: ['Node.js', 'MongoDB', 'IoT', 'Redis']
  }
]

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section experience-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-marker"></div>
              <motion.div
                className="experience-card"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <FaBriefcase className="icon" />
                      <span>{exp.company}</span>
                      <FaMapMarkerAlt className="icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt className="icon" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

