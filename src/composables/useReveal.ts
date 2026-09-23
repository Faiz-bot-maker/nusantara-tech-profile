import { onBeforeUnmount, type ComponentPublicInstance } from 'vue'

export function useReveal(threshold = 0.18) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold, rootMargin: '0px 0px -48px 0px' },
  )

  const bind = (el: Element | ComponentPublicInstance | null) => {
    if (!el) return
    const node = el as Element
    if (reduceMotion) {
      node.classList.add('is-visible')
    } else {
      observer.observe(node)
    }
  }

  onBeforeUnmount(() => observer.disconnect())

  return { bind }
}