import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = {
  'Programming Languages': {
    skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Go', 'Rust', 'Solidity', 'SQL'],
    color: '#6366f1'
  },
  'Frameworks': {
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'TensorFlow', 'PyTorch', 'Keras'],
    color: '#8b5cf6'
  },
  'Cloud & DevOps': {
    skills: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Serverless', 'Terraform', 'GitHub Actions'],
    color: '#ec4899'
  },
  'Blockchain & Web3': {
    skills: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'DeFi', 'NFTs', 'DApps'],
    color: '#f59e0b'
  },
  'AI/ML': {
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP (GPT/BERT)', 'Reinforcement Learning'],
    color: '#10b981'
  },
  'Cybersecurity': {
    skills: ['Zero Trust Architecture', 'GDPR', 'Quantum-safe Algorithms'],
    color: '#ef4444'
  },
  'IoT & Edge': {
    skills: ['MQTT', 'CoAP', 'Edge AI', 'Raspberry Pi', 'Arduino'],
    color: '#06b6d4'
  },
  'Tools & Databases': {
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Elasticsearch', 'Git'],
    color: '#14b8a6'
  }
}

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Key <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="skill-category-header" style={{ borderLeftColor: data.color }}>
                <h3>{category}</h3>
              </div>
              <div className="skill-tags">
                {data.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    style={{ '--skill-color': data.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="soft-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-list">
            {['Leadership', 'Public Speaking', 'Event Management', 'Time Management', 'Teamwork'].map((skill) => (
              <motion.span
                key={skill}
                className="soft-skill-badge"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

