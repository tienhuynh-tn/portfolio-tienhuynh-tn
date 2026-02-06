import { ArrowUp } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'

const SHOW_AFTER_PX = 300

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX)
      rafIdRef.current = null
    }

    const onScroll = () => {
      if (rafIdRef.current !== null) return
      rafIdRef.current = window.requestAnimationFrame(updateVisibility)
    }

    updateVisibility()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  const handleScrollTop = () => {
    const homeSection = document.getElementById('home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`pointer-events-none fixed bottom-20 right-4 z-40 transition-all duration-200 sm:bottom-6 sm:right-6 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-2 opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/85 text-[color:var(--muted)] shadow-sm backdrop-blur transition-all duration-200 hover:scale-105 hover:text-[color:var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
      >
        <ArrowUp size={18} weight="regular" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop
