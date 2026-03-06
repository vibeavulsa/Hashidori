import { useRef, useState, useEffect } from 'react'
import LiquidGlass from 'liquid-glass-react'
import './Navbar.css'

const links = [
  { label: 'Início',     href: '#hero' },
  { label: 'Sobre',      href: '#sobre' },
  { label: 'Portifólio', href: '#portifolio' },
  { label: 'Contato',    href: '#contato' },
]

export default function Navbar() {
  const containerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={containerRef} className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
      <LiquidGlass
        mouseContainer={containerRef}
        displacementScale={25}
        blurAmount={0.08}
        saturation={115}
        aberrationIntensity={0.8}
        elasticity={0.15}
        cornerRadius={999}
        className="navbar-glass"
      >
        <nav className="navbar-inner">
          {/* Logo */}
          <a href="#hero" className="navbar-logo" onClick={e => handleLink(e, '#hero')}>
            <span className="logo-kanji">橋鳥</span>
            <span className="logo-romaji">Hashidori</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contato"
            className="navbar-cta"
            onClick={e => handleLink(e, '#contato')}
          >
            Agendar
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </nav>
      </LiquidGlass>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
          ))}
          <a href="#contato" className="navbar-cta" onClick={e => handleLink(e, '#contato')}>
            Agendar
          </a>
        </div>
      )}
    </header>
  )
}
