import './About.css'

const values = [
  {
    kanji: '伝',
    label: 'Tradição',
    text: 'Técnicas milenares do Japão feudal, preservadas traço a traço.',
  },
  {
    kanji: '魂',
    label: 'Alma',
    text: 'Cada peça carrega intenção, história e energia do cliente.',
  },
  {
    kanji: '精',
    label: 'Precisão',
    text: 'Linhas limpas, preenchimento sólido e sombreado impecável.',
  },
  {
    kanji: '美',
    label: 'Beleza',
    text: 'Arte que envelhece com dignidade — como uma obra clássica.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        {/* Left: portrait / illustration side */}
        <div className="about-visual">
          <div className="about-portrait-frame">
            <div className="about-portrait-inner">
              <EnsoIllustration />
            </div>
            <div className="about-portrait-badge glass-panel">
              <span className="badge-kanji">橋鳥</span>
              <span className="badge-text">Est. 2016</span>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="about-text">
          <p className="section-label">Sobre o artista</p>

          <h2 className="section-heading about-heading">
            Jean Carlos<br />
            <em>Mestre do Traço Japonês</em>
          </h2>

          <p className="about-body">
            Sou Jean Carlos, tatuador apaixonado pela arte japonesa tradicional há mais de
            8 anos. Minha marca,{' '}
            <strong>橋鳥 Hashidori</strong> — &quot;o beija-flor&quot; —, nasce da
            crença de que a tatuagem é uma ponte entre o mundo interior e a pele visível,
            entre o passado ancestral e o presente vivo.
          </p>

          <p className="about-body">
            Inspirado pelos mestres <em>irezumi</em> do período Edo, trabalho com dragões,
            carpas koi, gueixas, flores de cerejeira, ondas de Hokusai e elementos
            geométricos japoneses. Cada composição é desenhada exclusivamente para você.
          </p>

          {/* Values grid */}
          <div className="about-values">
            {values.map(v => (
              <div key={v.kanji} className="value-card glass-panel">
                <span className="value-kanji">{v.kanji}</span>
                <div>
                  <strong>{v.label}</strong>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative horizontal rule */}
      <div className="about-rule">
        <span>❖</span>
      </div>
    </section>
  )
}

function EnsoIllustration() {
  return (
    <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="koi-svg">
      {/* Ensō circle — the quintessential zen symbol */}
      <circle
        cx="150" cy="170" r="100"
        stroke="var(--gold)"
        strokeWidth="6"
        fill="none"
        opacity="0.2"
        strokeLinecap="round"
        strokeDasharray="580 50"
      />
      <circle
        cx="150" cy="170" r="100"
        stroke="var(--gold)"
        strokeWidth="2"
        fill="none"
        opacity="0.08"
        strokeLinecap="round"
      />

      {/* Hummingbird silhouette inside the ensō */}
      <g transform="translate(110, 120)" opacity="0.5">
        {/* Body */}
        <path
          d="M45 15 C55 25 60 45 55 70 C52 82 44 90 40 95 C36 90 28 82 25 70 C20 45 25 25 35 15 C38 11 42 11 45 15Z"
          fill="var(--vermillion)"
        />
        {/* Right wing */}
        <path
          d="M55 35 C72 22 90 18 105 22 C92 30 72 42 58 48Z"
          fill="var(--vermillion)"
          opacity="0.6"
        />
        {/* Left wing */}
        <path
          d="M25 35 C8 22 -10 18 -25 22 C-12 30 8 42 22 48Z"
          fill="var(--vermillion)"
          opacity="0.6"
        />
        {/* Beak */}
        <path d="M40 12 L40 -8 L42 12Z" fill="var(--gold)" opacity="0.7" />
        {/* Tail */}
        <path
          d="M40 95 C36 108 32 120 28 130 C35 122 40 112 40 105 C40 112 45 122 52 130 C48 120 44 108 40 95Z"
          fill="var(--vermillion)"
          opacity="0.4"
        />
      </g>

      {/* Kanji — 鳥 (bird) below the ensō */}
      <text
        x="150" y="330"
        textAnchor="middle"
        fontFamily="var(--font-japanese)"
        fontSize="36"
        fill="var(--gold)"
        opacity="0.12"
      >
        鳥
      </text>

      {/* Subtle cherry blossom petals */}
      {[
        [50, 80, 0.3], [240, 100, 0.25], [60, 280, 0.2],
      ].map(([x, y, op], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="var(--vermillion)" opacity={op} />
      ))}
    </svg>
  )
}
