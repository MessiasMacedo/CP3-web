import { useEffect, useState } from 'react'

export function useTheme() {
  // O index.html já aplicou o tema salvo antes do React carregar
  const [theme, setTheme] = useState(document.documentElement.dataset.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, toggleTheme }
}
