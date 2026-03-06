import { useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const containerRef = useRef(null)

  const scrollToPortfolio = e => {
    e.preventDefault()
    document.querySelector('#portifolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" ref={containerRef}>
      {/* Background layers */}
      <div className="hero-bg-layer hero-waves" aria-hidden="true" />
      <div className="hero-bg-layer hero-gradient" aria-hidden="true" />

      {/* Floating kanji — subtle, single accent */}
      <span className="hero-deco hero-deco--1" aria-hidden="true">鳥</span>
      <span className="hero-deco hero-deco--2" aria-hidden="true">花</span>

      {/* Hummingbird SVG */}
      <HummingbirdSVG className="hero-hummingbird" />

      {/* Content card */}
      <div className="hero-content fade-up">
        {/* Pre-title */}
        <p className="hero-pretitle">
          <span className="hero-pretitle-line" />
          <span className="hero-pretitle-jp">橋鳥</span>
          <span className="hero-pretitle-line" />
        </p>

        <h1 className="hero-heading">
          Arte Japonesa<br />
          <em>Gravada na Pele</em>
        </h1>

        <p className="hero-sub">
          Tatuagens tradicionais e vintage japonesas — onde cada traço<br className="br-only-desktop" />
          carrega a alma milenar da arte do Japão.
        </p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn--primary" onClick={scrollToPortfolio}>
            Ver Portifólio
          </button>
          <button className="hero-btn hero-btn--secondary" onClick={scrollToContact}>
            Agendar Sessão
          </button>
        </div>

        {/* Stats — glassmorphism panel */}
        <div className="hero-stats glass-panel">
          <div className="hero-stat">
            <strong>8+</strong>
            <span>Anos de experiência</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>500+</strong>
            <span>Trabalhos realizados</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Arte personalizada</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

function HummingbirdSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.12">
        {/* Body */}
        <path
          d="M220 160 C240 180 250 220 240 270 C235 295 215 320 200 340 C185 320 165 295 160 270 C150 220 160 180 180 160 C190 148 210 148 220 160Z"
          fill="var(--gold)"
        />
        {/* Right wing — swept back elegantly */}
        <path
          d="M240 200 C280 170 330 150 370 160 C340 180 290 210 250 230Z"
          fill="var(--gold)"
          opacity="0.7"
        />
        {/* Left wing */}
        <path
          d="M160 200 C120 170 70 150 30 160 C60 180 110 210 150 230Z"
          fill="var(--gold)"
          opacity="0.7"
        />
        {/* Long beak */}
        <path
          d="M200 155 L200 100 L203 155Z"
          fill="var(--gold)"
          opacity="0.8"
        />
        {/* Tail feathers */}
        <path
          d="M200 340 C190 370 180 410 170 440 C185 420 200 400 200 380 C200 400 215 420 230 440 C220 410 210 370 200 340Z"
          fill="var(--gold)"
          opacity="0.6"
        />
        {/* Eye */}
        <circle cx="193" cy="168" r="4" fill="var(--vermillion)" opacity="0.6" />
      </g>
    </svg>
  )
}
