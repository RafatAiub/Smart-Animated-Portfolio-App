import { useState, useEffect, Suspense, lazy } from 'react'
import { ThemeProvider } from './hooks/useTheme.jsx'
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Certifications = lazy(() => import('./components/Certifications'))
const Projects = lazy(() => import('./components/Projects'))
const Publications = lazy(() => import('./components/Publications'))
const Awards = lazy(() => import('./components/Awards'))
const LearningResources = lazy(() => import('./components/LearningResources'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'publications', 'awards', 'resources', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <div className={`app ${theme}`}>
        <ParticleBackground theme={theme} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Navigation activeSection={activeSection} />
        
        <main className="main-content">
          <Suspense fallback={<LoadingScreen />}>
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="education">
              <Education />
            </section>
            
            <section id="certifications">
              <Certifications />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="publications">
              <Publications />
            </section>
            
            <section id="awards">
              <Awards />
            </section>
            
            <section id="resources">
              <LearningResources />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
