import { useEffect, useMemo, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const SECTIONS = ['projects', 'experience', 'contact'] as const

type SectionId = (typeof SECTIONS)[number]

function Navbar() {
  const [activeId, setActiveId] = useState<SectionId>('projects')

  const sectionElements = useMemo(() => {
    if (typeof document === 'undefined') return []
    return SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    )
  }, [])

  useEffect(() => {
    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveId(visibleEntries[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.15, 0.25, 0.5, 0.75],
      }
    )

    sectionElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionElements])

  return (
    <header className="navbar">
      <div className="container navbarInner">
        <div className="navbarBrand">Huỳnh Tiên</div>
        <nav className="navbarLinks" aria-label="Primary">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? 'navLink navLink--active' : 'navLink'}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
