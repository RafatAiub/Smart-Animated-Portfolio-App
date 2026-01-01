import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaAws, FaEthereum, FaBrain } from 'react-icons/fa'

const projects = [
  {
    name: 'AmarBin - Smart Waste Management',
    description: 'Full-stack platform for waste collection, built with React.js, Node.js, MongoDB. Deployed on AWS with automated CI/CD.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'CI/CD'],
    icons: [<FaReact />, <FaNode />, <FaAws />],
    color: '#10b981'
  },
  {
    name: 'Blockchain Voting System',
    description: 'Smart contract development for secure voting, using Ethereum and Solidity, integrated with Web3.js.',
    tech: ['Ethereum', 'Solidity', 'Web3.js', 'Blockchain'],
    icons: [<FaEthereum />],
    color: '#627EEA'
  },
  {
    name: 'AI-Powered Recommendation System',
    description: 'AI-driven recommendation engine using TensorFlow for real-time personalized suggestions.',
    tech: ['TensorFlow', 'Python', 'AI/ML', 'Real-time'],
    icons: [<FaBrain />],
    color: '#FF6F00'
  }
]

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section projects-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 5 }}
              style={{ '--project-color': project.color }}
            >
              <div className="project-header">
                <div className="project-icons">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="project-icon">{icon}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

