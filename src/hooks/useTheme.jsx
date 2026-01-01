import { useContext, createContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children, theme, setTheme }) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    return { theme: 'dark', setTheme: () => {} }
  }
  return context
}

