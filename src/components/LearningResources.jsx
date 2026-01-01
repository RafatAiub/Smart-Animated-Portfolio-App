import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaBook, FaGraduationCap, FaCode, FaRocket, FaCloud, FaEthereum, FaBrain } from 'react-icons/fa'
import { learningResources } from '../data/links'

const categoryIcons = {
  'Full Stack Development': <FaCode />,
  'Cloud & DevOps': <FaCloud />,
  'Blockchain & Web3': <FaEthereum />,
  'AI/ML': <FaBrain />
}

function LearningResources() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section learning-resources-section" id="resources" ref={ref}>
      <div className="container">
        <motion.div
          className="resources-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="resources-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <FaRocket />
            <span>Curated Learning Hub</span>
          </motion.div>
          
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Learning <span className="gradient-text">Resources</span>
          </motion.h2>

          <motion.p
            className="section-subtitle resources-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Master modern technologies with handpicked official documentation, interactive tutorials, 
            and comprehensive learning platforms. Each resource is carefully selected to accelerate your 
            journey from beginner to expert.
          </motion.p>
        </motion.div>

        <div className="resources-grid">
          {learningResources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="resource-category"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: categoryIndex * 0.15 + 0.5, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
            >
              <div className="resource-category-header">
                <div className="category-icon-wrapper">
                  {categoryIcons[category.category] || <FaBook />}
                </div>
                <h3 className="resource-category-title">{category.category}</h3>
              </div>
              
              <div className="resources-list">
                {category.resources.map((resource, index) => (
                  <motion.a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.15 + index * 0.1 + 0.6,
                      duration: 0.4
                    }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="resource-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="resource-content">
                      <h4>{resource.name}</h4>
                      <p>{resource.description}</p>
                    </div>
                    <div className="resource-link-wrapper">
                      <FaExternalLinkAlt className="resource-link-icon" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="resources-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>Want to learn more? Check out the <a href="#skills">Skills</a> section for technology-specific resources!</p>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningResources
