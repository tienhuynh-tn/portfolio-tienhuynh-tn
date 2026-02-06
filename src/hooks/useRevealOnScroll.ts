import { useEffect, useRef } from 'react'

type RevealOptions = {
  threshold?: number | number[]
  rootMargin?: string
}

function useRevealOnScroll(options: RevealOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null)
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = options

  useEffect(() => {
    const rootEl = containerRef.current
    if (!rootEl) return

    const elements = Array.from(
      rootEl.querySelectorAll<HTMLElement>('.reveal')
    )

    if (rootEl.classList.contains('reveal')) {
      elements.unshift(rootEl)
    }

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return containerRef
}

export default useRevealOnScroll
