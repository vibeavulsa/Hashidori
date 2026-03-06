import { useState, useRef } from 'react'
import LiquidGlass from 'liquid-glass-react'
import './Gallery.css'

const categories = ['Todos', 'Dragão', 'Koi', 'Flores', 'Geométrico', 'Gueixa']

const works = [
  {
    id: 1,
    title: 'Dragão Imperial',
    category: 'Dragão',
    kanji: '龍',
    style: 'Tebori tradicional',
    color: '#c0392b',
    desc: 'Dragão ryu em composição de manga completa',
  },
  {
    id: 2,
    title: 'Carpa Koi Ascendente',
    category: 'Koi',
    kanji: '鯉',
    style: 'Blackwork & Color',
    color: '#e05840',
    desc: 'Carpa koi contra a correnteza — símbolo de perseverança',
  },
  {
    id: 3,
    title: 'Cerejeiras de Edo',
    category: 'Flores',
    kanji: '桜',
    style: 'Neo-tradicional',
    color: '#c9a84c',
    desc: 'Composição floral inspirada nas ukiyo-e do período Edo',
  },
  {
    id: 4,
    title: 'Yagasuri',
    category: 'Geométrico',
    kanji: '矢',
    style: 'Geométrico japonês',
    color: '#1c3557',
    desc: 'Padrão de setas — proteção e propósito',
  },
  {
    id: 5,
    title: 'Gueixa Kiku',
    category: 'Gueixa',
    kanji: '芸',
    style: 'Realismo japonês',
    color: '#8e44ad',
    desc: 'Gueixa entre crisântemos imperiais',
  },
  {
    id: 6,
    title: 'Ryu Namigashira',
    category: 'Dragão',
    kanji: '波',
    style: 'Tradicional Edo',
    color: '#16a085',
    desc: 'Dragão emergindo das ondas de Hokusai',
  },
  {
    id: 7,
    title: 'Koi Negativo',
    category: 'Koi',
    kanji: '清',
    style: 'Blackwork',
    color: '#2c3e50',
    desc: 'Koi em espaço negativo — dualidade e equilíbrio',
  },
  {
    id: 8,
    title: 'Asanoha',
    category: 'Geométrico',
    kanji: '麻',
    style: 'Geométrico clássico',
    color: '#c9a84c',
    desc: 'Padrão asanoha — crescimento e energia vital',
  },
  {
    id: 9,
    title: 'Peônia Imperial',
    category: 'Flores',
    kanji: '牡',
    style: 'Color realism',
    color: '#c0392b',
    desc: 'Botan — flor da riqueza e prosperidade',
  },
]

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const containerRef = useRef(null)

  const filtered = active === 'Todos' ? works : works.filter(w => w.category === active)

  return (
    <section id="portifolio" className="gallery" ref={containerRef}>
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <p className="section-label">Trabalhos</p>
          <h2 className="section-heading gallery-heading">
            Portifólio<br />
            <em>Cada Peça, uma História</em>
          </h2>
        </div>

        {/* Filter tabs using LiquidGlass */}
        <div className="gallery-filters">
          {categories.map(cat => (
            <LiquidGlass
              key={cat}
              mouseContainer={containerRef}
              displacementScale={active === cat ? 45 : 28}
              blurAmount={active === cat ? 0.1 : 0.05}
              saturation={active === cat ? 140 : 110}
              aberrationIntensity={active === cat ? 1.5 : 0.8}
              elasticity={0.2}
              cornerRadius={999}
              padding="0"
              onClick={() => setActive(cat)}
              className="filter-glass"
            >
              <button
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            </LiquidGlass>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map(work => (
            <GalleryCard key={work.id} work={work} />
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={50}
            blurAmount={0.09}
            saturation={135}
            aberrationIntensity={1.8}
            elasticity={0.25}
            cornerRadius={999}
            padding="0"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="gallery-cta-glass"
          >
            <button
              className="gallery-cta-btn"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero minha peça exclusiva →
            </button>
          </LiquidGlass>
        </div>
      </div>
    </section>
  )
}

function GalleryCard({ work }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`gallery-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Illustration placeholder */}
      <div className="card-visual" style={{ '--card-color': work.color }}>
        <span className="card-kanji-bg">{work.kanji}</span>

        {/* Minimalist tattoo illustration */}
        <CardIllustration work={work} />

        {/* Hover overlay */}
        <div className="card-overlay">
          <span className="card-style">{work.style}</span>
          <p className="card-desc">{work.desc}</p>
        </div>
      </div>

      <div className="card-info">
        <span className="card-category">{work.category}</span>
        <h3 className="card-title">{work.title}</h3>
      </div>
    </div>
  )
}

function CardIllustration({ work }) {
  const illustrations = {
    'Dragão': (
      <svg viewBox="0 0 180 180" className="card-illus">
        <path d="M90 30 C70 50 40 70 50 100 C60 130 80 120 90 140 C100 120 120 130 130 100 C140 70 110 50 90 30Z"
          fill={work.color} opacity="0.4" />
        <path d="M90 30 L60 90 L90 140 L120 90Z" fill={work.color} opacity="0.3" />
        <circle cx="90" cy="55" r="8" fill={work.color} opacity="0.8" />
        <path d="M60 90 Q45 70 50 50 Q65 60 60 90Z" fill={work.color} opacity="0.5" />
        <path d="M120 90 Q135 70 130 50 Q115 60 120 90Z" fill={work.color} opacity="0.5" />
        {/* Scales */}
        {[[80,80],[90,95],[100,80],[85,110],[95,110]].map(([x,y],i)=>(
          <path key={i} d={`M${x} ${y} Q${x+5} ${y-5} ${x+10} ${y}`} stroke={work.color} strokeWidth="1" fill="none" opacity="0.6"/>
        ))}
      </svg>
    ),
    'Koi': (
      <svg viewBox="0 0 180 180" className="card-illus">
        <ellipse cx="90" cy="90" rx="35" ry="75" fill={work.color} opacity="0.5" transform="rotate(-20 90 90)" />
        <ellipse cx="92" cy="88" rx="28" ry="62" fill={work.color} opacity="0.3" transform="rotate(-20 92 88)" />
        <path d="M68 140 Q90 160 112 140 Q100 125 68 140Z" fill={work.color} opacity="0.6" />
        <circle cx="82" cy="50" r="6" fill="var(--ink)" />
        <circle cx="83" cy="49" r="2" fill="var(--gold)" />
        {[[78,70],[88,82],[82,95],[90,108]].map(([x,y],i)=>(
          <path key={i} d={`M${x} ${y} Q${x+7} ${y-6} ${x+14} ${y}`} stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="none"/>
        ))}
        <path d="M60 90 Q45 82 48 70 Q58 75 60 90Z" fill={work.color} opacity="0.4" />
      </svg>
    ),
    'Flores': (
      <svg viewBox="0 0 180 180" className="card-illus">
        {[0,72,144,216,288].map((rot,i)=>(
          <g key={i} transform={`rotate(${rot} 90 90)`}>
            <ellipse cx="90" cy="58" rx="12" ry="24" fill={work.color} opacity="0.55" />
          </g>
        ))}
        <circle cx="90" cy="90" r="16" fill={work.color} opacity="0.8" />
        <circle cx="90" cy="90" r="8"  fill="var(--gold)" opacity="0.6" />
        {/* Branch */}
        <path d="M50 150 Q70 120 90 110 Q110 100 130 80" stroke={work.color} strokeWidth="2" fill="none" opacity="0.4"/>
        {/* Small buds */}
        {[[65,130],[100,105],[120,88]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="5" fill={work.color} opacity="0.4"/>
        ))}
      </svg>
    ),
    'Geométrico': (
      <svg viewBox="0 0 180 180" className="card-illus">
        {/* Asanoha / yagasuri geometric pattern */}
        <g stroke={work.color} strokeWidth="1.5" fill="none" opacity="0.7">
          <polygon points="90,30 150,90 90,150 30,90" />
          <polygon points="90,50 130,90 90,130 50,90" />
          <polygon points="90,70 110,90 90,110 70,90" />
          <line x1="90" y1="30" x2="90" y2="150"/>
          <line x1="30" y1="90" x2="150" y2="90"/>
          <line x1="50" y1="50" x2="130" y2="130"/>
          <line x1="130" y1="50" x2="50" y2="130"/>
        </g>
        <circle cx="90" cy="90" r="6" fill={work.color} opacity="0.9" />
      </svg>
    ),
    'Gueixa': (
      <svg viewBox="0 0 180 180" className="card-illus">
        {/* Simple gueixa silhouette */}
        <ellipse cx="90" cy="65" rx="22" ry="28" fill={work.color} opacity="0.4" />
        <path d="M68 90 Q60 130 65 160 L115 160 Q120 130 112 90Z" fill={work.color} opacity="0.35" />
        <path d="M75 55 Q90 38 105 55" stroke="var(--ink)" strokeWidth="8" fill="none" />
        <circle cx="90" cy="63" r="3" fill="var(--gold)" opacity="0.8" />
        {/* Fan */}
        {[-30,-15,0,15,30].map((a,i)=>(
          <path key={i} d={`M110 100 L${110+40*Math.sin(a*Math.PI/180)} ${100-40*Math.cos(a*Math.PI/180)}`}
            stroke={work.color} strokeWidth="1.5" opacity="0.5" />
        ))}
        <path d="M78 100 Q90 95 102 100" stroke={work.color} strokeWidth="1.5" fill="none" />
      </svg>
    ),
  }
  return illustrations[work.category] || illustrations['Flores']
}
