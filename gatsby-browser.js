import React from 'react'
import { ThemeProvider } from './src/context/index'
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
