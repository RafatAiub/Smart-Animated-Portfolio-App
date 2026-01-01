import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{ rotate: theme === 'dark' ? 0 : 180 }}
    >
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </motion.button>
  )
}

export default ThemeToggle

