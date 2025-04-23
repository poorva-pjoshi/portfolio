"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children, defaultTheme = "light" }) {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) return storedTheme

    // Check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }

    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
