import { useRef } from 'react'
import LiquidGlass from 'liquid-glass-react'
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

      {/* Floating kanji decorations */}
      <span className="hero-deco hero-deco--1" aria-hidden="true">龍</span>
      <span className="hero-deco hero-deco--2" aria-hidden="true">花</span>
      <span className="hero-deco hero-deco--3" aria-hidden="true">波</span>
      <span className="hero-deco hero-deco--4" aria-hidden="true">風</span>

      {/* Crane SVG */}
      <CraneSVG className="hero-crane" />

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
          <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={55}
            blurAmount={0.08}
            saturation={140}
            aberrationIntensity={2}
            elasticity={0.3}
            cornerRadius={999}
            padding="0"
            onClick={scrollToPortfolio}
            className="hero-btn-glass"
          >
            <button className="hero-btn hero-btn--primary" onClick={scrollToPortfolio}>
              Ver Portifólio
            </button>
          </LiquidGlass>

          <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={40}
            blurAmount={0.04}
            saturation={120}
            aberrationIntensity={1}
            elasticity={0.2}
            cornerRadius={999}
            padding="0"
            onClick={scrollToContact}
            className="hero-btn-glass"
          >
            <button className="hero-btn hero-btn--secondary" onClick={scrollToContact}>
              Agendar Sessão
            </button>
          </LiquidGlass>
        </div>

        {/* Stats */}
        <div className="hero-stats">
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

function CraneSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Origami crane silhouette */}
      <g opacity="0.15">
        <path
          d="M200 80 L280 180 L320 160 L260 240 L340 260 L240 280 L260 380 L200 340 L140 380 L160 280 L60 260 L140 240 L80 160 L120 180 Z"
          fill="var(--gold)"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M200 80 L200 340"
          stroke="var(--gold)"
          strokeWidth="0.5"
          opacity="0.5"
        />
        {/* Wing details */}
        <path
          d="M200 200 L140 240 L160 280"
          stroke="var(--gold)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M200 200 L260 240 L240 280"
          stroke="var(--gold)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* Head */}
        <circle cx="200" cy="72" r="10" fill="var(--vermillion)" opacity="0.6" />
      </g>
    </svg>
  )
}
