import { useEffect, useMemo, useRef, useState } from 'react'
import { NAV_ITEMS, type NavItemId } from '../../app/navItems'
import ThemeToggle from './ThemeToggle'

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '-20% 0px -70% 0px',
  threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
}

type SectionMetrics = {
  ratio: number
  top: number
  isIntersecting: boolean
}

function Navbar() {
  const [activeId, setActiveId] = useState<NavItemId>('home')
  const ignoreObserverUntilRef = useRef(0)
  const rafIdRef = useRef(0)
  const lockTimeoutRef = useRef<number | null>(null)
  const metricsRef = useRef<Map<NavItemId, SectionMetrics>>(new Map())

  const sectionOrder = useMemo(() => {
    const order = new Map<NavItemId, number>()
    NAV_ITEMS.forEach((item, index) => order.set(item.id, index))
    return order
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => {
      const element = document.getElementById(item.id)
      return element ? { id: item.id, element } : null
    }).filter(Boolean) as Array<{ id: NavItemId; element: HTMLElement }>

    if (sections.length === 0) return

    metricsRef.current = new Map(
      sections.map((section) => [
        section.id,
        { ratio: 0, top: Number.POSITIVE_INFINITY, isIntersecting: false },
      ])
    )

    const pickFromObserver = (): NavItemId | null => {
      const candidates = NAV_ITEMS.map((item) => {
        const metric = metricsRef.current.get(item.id)
        return {
          id: item.id,
          ratio: metric?.ratio ?? 0,
          top: metric?.top ?? Number.POSITIVE_INFINITY,
          isIntersecting: metric?.isIntersecting ?? false,
        }
      }).filter((entry) => entry.isIntersecting && entry.ratio > 0)

      if (candidates.length === 0) return null

      candidates.sort((a, b) => {
        if (b.ratio !== a.ratio) return b.ratio - a.ratio

        const aTop = Math.abs(a.top)
        const bTop = Math.abs(b.top)
        if (aTop !== bTop) return aTop - bTop

        return (sectionOrder.get(a.id) ?? 0) - (sectionOrder.get(b.id) ?? 0)
      })

      return candidates[0].id
    }

    const runFallback = () => {
      if (performance.now() < ignoreObserverUntilRef.current) return

      if (window.scrollY <= 4) {
        setActiveId('home')
        return
      }

      const viewportBottom = window.scrollY + window.innerHeight
      const documentBottom = document.documentElement.scrollHeight
      if (viewportBottom >= documentBottom - 4) {
        setActiveId('contact')
        return
      }

      const headerHeight =
        document.querySelector<HTMLElement>('.navbar')?.getBoundingClientRect()
          .height ?? 100
      const spyLine = headerHeight + 20

      let activeCandidate: NavItemId = 'home'
      sections.forEach((section) => {
        if (section.element.getBoundingClientRect().top <= spyLine) {
          activeCandidate = section.id
        }
      })

      setActiveId(activeCandidate)
    }

    const scheduleFallback = () => {
      if (rafIdRef.current) return
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = 0
        runFallback()
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id as NavItemId
        metricsRef.current.set(id, {
          ratio: entry.intersectionRatio,
          top: entry.boundingClientRect.top,
          isIntersecting: entry.isIntersecting,
        })
      })

      if (performance.now() < ignoreObserverUntilRef.current) return

      const nextActive = pickFromObserver()
      if (nextActive) {
        setActiveId(nextActive)
      } else {
        scheduleFallback()
      }
    }, OBSERVER_OPTIONS)

    sections.forEach((section) => observer.observe(section.element))
    window.addEventListener('scroll', scheduleFallback, { passive: true })
    window.addEventListener('resize', scheduleFallback)
    scheduleFallback()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleFallback)
      window.removeEventListener('resize', scheduleFallback)
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = 0
      }
      if (lockTimeoutRef.current !== null) {
        window.clearTimeout(lockTimeoutRef.current)
        lockTimeoutRef.current = null
      }
    }
  }, [sectionOrder])

  const handleNavClick = (id: NavItemId) => {
    setActiveId(id)
    ignoreObserverUntilRef.current = performance.now() + 300
    if (lockTimeoutRef.current !== null) {
      window.clearTimeout(lockTimeoutRef.current)
    }
    lockTimeoutRef.current = window.setTimeout(() => {
      ignoreObserverUntilRef.current = 0
      lockTimeoutRef.current = null
    }, 320)
  }

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
              onClick={() => handleNavClick(item.id)}
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
