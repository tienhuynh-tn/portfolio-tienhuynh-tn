import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}

export default ThemeToggle
