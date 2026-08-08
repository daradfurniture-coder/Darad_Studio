import type { MouseEvent } from 'react'

/**
 * Smooth-scrolls to a page section (e.g. "#services") without touching the
 * URL hash, which is owned by HashRouter and would otherwise be treated as
 * a route change.
 */
export function scrollToSection(e: MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  if (!href.startsWith('#') || href === '#') return
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
}
