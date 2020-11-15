import React, { createContext, useContext, useState } from 'react'

const initTheme = {
  isDark: true,
  isGeo: false,
}

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initTheme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeValue = () => useContext(ThemeContext)
