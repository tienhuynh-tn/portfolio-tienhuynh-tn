import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

type Theme = 'light' | 'dark'
type StoredTheme = Theme | null

function getStoredTheme(): StoredTheme {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === 'dark' || value === 'light' ? value : null
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    () => getStoredTheme() ?? getSystemTheme()
  )
  const [hasPreference, setHasPreference] = useState(() =>
    Boolean(getStoredTheme())
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (hasPreference) return

    const mediaQuery = window.matchMedia(MEDIA_QUERY)
    const handler = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
    } else {
      mediaQuery.addListener(handler)
    }

    return () => {
      if (mediaQuery.addEventListener) {
        mediaQuery.removeEventListener('change', handler)
      } else {
        mediaQuery.removeListener(handler)
      }
    }
  }, [hasPreference])

  const handleToggle = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    setHasPreference(true)
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
  }

  return (
    <button
      type="button"
      className={`themeToggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
      onClick={handleToggle}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      <span className="themeToggleLabel">DARK</span>
      <span className="themeToggleSwitch" aria-hidden="true">
        <span className="themeToggleThumb">{theme === 'dark' ? '☾' : '☀'}</span>
      </span>
      <span className="themeToggleLabel">LIGHT</span>
    </button>
  )
}

export default ThemeToggle
