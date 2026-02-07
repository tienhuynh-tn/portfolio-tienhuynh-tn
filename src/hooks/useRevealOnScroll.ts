import { useRef } from 'react'

type RevealOptions = {
  threshold?: number | number[]
  rootMargin?: string
}

function useRevealOnScroll<T extends HTMLElement>(_options: RevealOptions = {}) {
  const containerRef = useRef<T | null>(null)
  return containerRef
}

export default useRevealOnScroll
