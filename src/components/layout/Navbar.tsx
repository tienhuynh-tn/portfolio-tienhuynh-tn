import { useEffect, useMemo, useState } from 'react'
import { NAV_ITEMS, type NavItemId } from '../../app/navItems'
import ThemeToggle from './ThemeToggle'

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '-40% 0px -55% 0px',
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
}

function Navbar() {
  const [activeId, setActiveId] = useState<NavItemId>('home')

  const sectionOrder = useMemo(() => {
    const map = new Map<NavItemId, number>()
    NAV_ITEMS.forEach((item, index) => map.set(item.id, index))
    return map
  }, [])

  useEffect(() => {
    const ratios = new Map<NavItemId, number>()
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[]

    if (sectionElements.length === 0) return

    const updateActiveSection = () => {
      const intersecting = NAV_ITEMS.map((item) => ({
        id: item.id,
        ratio: ratios.get(item.id) ?? 0,
      })).filter((entry) => entry.ratio > 0)

      if (intersecting.length === 0) return

      intersecting.sort((a, b) => {
        if (b.ratio !== a.ratio) return b.ratio - a.ratio
        return (sectionOrder.get(a.id) ?? 0) - (sectionOrder.get(b.id) ?? 0)
      })

      setActiveId(intersecting[0].id)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id as NavItemId
        ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
      })
      updateActiveSection()
    }, OBSERVER_OPTIONS)

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionOrder])

  return (
    <header className="navbar">
      <div className="container navbarInner">
        <a href="#home" className="navBrand" aria-label="Go to top">
          <span className="brandMark">&lt;</span>
          <span className="brandName">Tien Huynh</span>
          <span className="brandMark">/&gt;</span>
        </a>

        <nav className="navbarLinks" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navLink ${activeId === item.id ? 'navLink--active' : ''}`}
              aria-current={activeId === item.id ? 'page' : undefined}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
