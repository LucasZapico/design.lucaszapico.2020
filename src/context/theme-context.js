import React, { createContext, useContext, useState } from 'react'

const initTheme = {
  isLight: false,
  isGeo: false,
}

export const ThemeContext = createContext(initTheme)
export const ThemeProvider = ({ children }) => {
  const [theme, initSetTheme] = useState(initTheme)
  const setTheme = value => {
    initSetTheme(value)
    // Persist it on update
    console.log('storage theme', JSON.stringify(value))
    window.localStorage.setItem('theme', JSON.stringify(value))
    console.log(window.localStorage)
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeValue = () => useContext(ThemeContext)

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem(
    'theme'
  )
  const hasPersistedPreference =
    typeof persistedColorPreference === 'object'
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference
  }
  // If they haven't been explicit, let's check the media
  //  query
  const mql = window.matchMedia('(prefers-color-schema: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }
  return dark
}
