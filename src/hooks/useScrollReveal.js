import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the `visible` class is added.
 * @param {IntersectionObserverInit} options
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const optionsRef = useRef(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, ...optionsRef.current }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
