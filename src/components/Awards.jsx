import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

const awards = [
  {
    title: 'Intel Software Innovator Award',
    date: 'May 2019',
    icon: <FaTrophy />,
    color: '#FFD700',
    position: 'Winner'
  },
  {
    title: 'TCS EngiNx Engineering Project Innovation Contest',
    date: 'Sep 2018',
    icon: <FaMedal />,
    color: '#C0C0C0',
    position: 'Second Runner-Up'
  },
  {
    title: 'Facebook Developers Circle Hackathon',
    date: 'Aug 2017',
    icon: <FaAward />,
    color: '#CD7F32',
    position: 'Runner-Up'
  }
]

function Awards() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="section awards-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Honors & <span className="gradient-text">Awards</span>
        </motion.h2>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="award-card"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
              style={{ '--award-color': award.color }}
            >
              <div className="award-icon" style={{ color: award.color }}>
                {award.icon}
              </div>
              <div className="award-badge">{award.position}</div>
              <h3>{award.title}</h3>
              <p className="award-date">{award.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

