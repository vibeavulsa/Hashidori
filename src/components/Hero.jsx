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

      {/* Hummingbirds */}
      <div className="hero-bird-wrap hero-bird-wrap--1">
        <HummingbirdSVG />
      </div>
      <div className="hero-bird-wrap hero-bird-wrap--2">
        <HummingbirdSVG />
      </div>

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

function HummingbirdSVG() {
  return (
    <svg
      className="bird-svg"
      viewBox="0 0 380 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Wings — UP beat */}
      <g className="bird-wings bird-wings--up">
        <path
          d="M 175,118 C 185,76 215,42 260,26 C 230,62 198,92 175,118Z"
          fill="var(--gold)"
          opacity="0.82"
        />
        <path
          d="M 175,118 C 156,74 128,42 86,28 C 114,66 148,94 175,118Z"
          fill="var(--gold)"
          opacity="0.68"
        />
      </g>

      {/* Wings — DOWN beat */}
      <g className="bird-wings bird-wings--down">
        <path
          d="M 175,152 C 185,194 215,222 258,236 C 228,202 198,172 175,152Z"
          fill="var(--gold)"
          opacity="0.82"
        />
        <path
          d="M 175,152 C 156,194 128,218 84,230 C 112,196 148,170 175,152Z"
          fill="var(--gold)"
          opacity="0.68"
        />
      </g>

      {/* Body */}
      <path
        d="M 98,126 C 90,110 96,92 116,87 C 145,80 185,89 222,102 C 258,115 276,134 273,154 C 270,172 248,180 214,180 C 174,180 128,166 100,146 C 88,137 94,130 98,126Z"
        fill="var(--gold)"
      />

      {/* Beak — needle-sharp like a katana blade */}
      <path
        d="M 80,119 L 15,123 L 15,130 L 80,128Z"
        fill="var(--gold)"
        opacity="0.92"
      />

      {/* Tail feathers */}
      <path d="M 271,138 C 310,120 338,114 360,118" stroke="var(--gold)" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.78"/>
      <path d="M 271,149 C 312,147 341,149 361,153" stroke="var(--gold)" strokeWidth="4"   strokeLinecap="round" fill="none" opacity="0.68"/>
      <path d="M 271,161 C 308,174 334,180 356,177" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.58"/>

      {/* Eye */}
      <circle cx="98"   cy="117"   r="5.5" fill="var(--vermillion)" opacity="0.95"/>
      <circle cx="96.5" cy="115.5" r="2.2" fill="rgba(250,246,240,0.75)"/>
    </svg>
  )
}
