import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const SECTIONS = ['projects', 'experience', 'contact'] as const

type SectionId = (typeof SECTIONS)[number]
type ActiveSection = SectionId | null

function Navbar() {
  const [activeId, setActiveId] = useState<ActiveSection>(null)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let rafId = 0
    let timeoutId: number | null = null

    const updateActive = () => {
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 56
      const y = window.scrollY + navHeight + Math.round(window.innerHeight * 0.33)

      const tops = SECTIONS.map((id) => {
        const el = document.getElementById(id)
        if (!el) return null
        // absolute top in document coordinates
        const top = el.getBoundingClientRect().top + window.scrollY
        return { id, top }
      }).filter(Boolean) as Array<{ id: SectionId; top: number }>

      if (tops.length === 0) {
        setActiveId(null)
        return
      }

      tops.sort((a, b) => a.top - b.top)

      // Home zone: trước section đầu tiên
      if (y < tops[0].top) {
        setActiveId(null)
        return
      }

      // Nếu y nằm trong [tops[i], tops[i+1]) => active = i
      for (let i = 0; i < tops.length; i++) {
        const current = tops[i]
        const next = tops[i + 1]

        if (!next || y < next.top) {
          setActiveId(current.id)
          return
        }
      }

      setActiveId(null)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        updateActive()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('hashchange', onScroll)
    updateActive()
    timeoutId = window.setTimeout(updateActive, 50)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('hashchange', onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
      if (timeoutId !== null) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <header className="navbar" ref={navRef}>
      <div className="container navbarInner">
        <a href="#hero" className="navBrand" aria-label="Go to top">
          <span className="brandMark">&lt;</span>
          <span className="brandName">Tien Huynh</span>
          <span className="brandMark">/&gt;</span>
        </a>
        <nav className="navbarLinks" aria-label="Primary">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navLink ${activeId === id ? 'navLink--active' : ''}`}
              aria-current={activeId === id ? 'page' : undefined}
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
