import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
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
  const headerRef  = useScrollReveal()
  const filtersRef = useScrollReveal()
  const gridRef    = useScrollReveal()

  const filtered = active === 'Todos' ? works : works.filter(w => w.category === active)

  return (
    <section id="portifolio" className="gallery">
      <div className="gallery-container">
        {/* Header */}
        <div ref={headerRef} className="gallery-header reveal">
          <p className="section-label">Trabalhos</p>
          <h2 className="section-heading gallery-heading">
            Portifólio<br />
            <em>Cada Peça, uma História</em>
          </h2>
        </div>

        {/* Filter tabs — CSS glassmorphism */}
        <div ref={filtersRef} className="gallery-filters reveal">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="gallery-grid reveal">
          {filtered.map(work => (
            <GalleryCard key={work.id} work={work} />
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          <button
            className="gallery-cta-btn"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero minha peça exclusiva →
          </button>
        </div>
      </div>
    </section>
  )
}

function GalleryCard({ work }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`gallery-card glass-panel ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual area */}
      <div className="card-visual" style={{ '--card-color': work.color }}>
        <span className="card-kanji-bg">{work.kanji}</span>

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
