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
              {/* Koi fish SVG illustration */}
              <KoiIllustration />
            </div>
            <div className="about-portrait-badge">
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
            <strong>橋鳥 Hashidori</strong> — &quot;o pássaro da ponte&quot; —, nasce da
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
              <div key={v.kanji} className="value-card">
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

function KoiIllustration() {
  return (
    <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="koi-svg">
      {/* Water waves background */}
      {[0,1,2,3,4,5].map(i => (
        <path
          key={i}
          d={`M0 ${60 + i*55} Q75 ${45 + i*55} 150 ${60 + i*55} Q225 ${75 + i*55} 300 ${60 + i*55}`}
          stroke="rgba(28,53,87,0.4)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}

      {/* Koi body */}
      <ellipse cx="150" cy="190" rx="55" ry="130" fill="var(--vermillion)" opacity="0.85" transform="rotate(-15 150 190)" />
      <ellipse cx="155" cy="190" rx="48" ry="118" fill="#e05840" opacity="0.6" transform="rotate(-15 155 190)" />

      {/* White koi markings */}
      <ellipse cx="148" cy="155" rx="22" ry="30" fill="var(--cream)" opacity="0.5" transform="rotate(-15 148 155)" />
      <ellipse cx="158" cy="220" rx="18" ry="24" fill="var(--cream)" opacity="0.35" transform="rotate(-15 158 220)" />

      {/* Scales */}
      {[[140,140],[155,155],[145,170],[160,185],[148,200],[162,215]].map(([x,y],i) => (
        <path
          key={i}
          d={`M${x} ${y} Q${x+8} ${y-8} ${x+16} ${y}`}
          stroke="rgba(201,168,76,0.4)"
          strokeWidth="1"
          fill="none"
        />
      ))}

      {/* Tail fin */}
      <path d="M120 290 Q140 320 160 290 Q180 260 160 270 Q140 280 120 290Z"
        fill="var(--vermillion)" opacity="0.7" />
      <path d="M162 290 Q182 330 195 300 Q185 275 162 290Z"
        fill="#c0392b" opacity="0.5" />

      {/* Pectoral fins */}
      <path d="M105 185 Q85 175 90 160 Q100 165 115 178Z"
        fill="var(--gold)" opacity="0.6" />
      <path d="M185 200 Q208 188 205 173 Q194 180 180 195Z"
        fill="var(--gold)" opacity="0.4" />

      {/* Eye */}
      <circle cx="148" cy="112" r="8" fill="var(--ink)" />
      <circle cx="148" cy="112" r="6" fill="#2a2a3a" />
      <circle cx="149" cy="111" r="2.5" fill="var(--gold)" opacity="0.9" />
      <circle cx="150.5" cy="110" r="1" fill="var(--cream)" opacity="0.8" />

      {/* Cherry blossom petals (floating) */}
      {[
        [40, 60, 0], [250, 90, 15], [60, 260, -10],
        [230, 290, 20], [270, 180, -5],
      ].map(([x, y, rot], i) => (
        <g key={i} transform={`translate(${x},${y}) rotate(${rot})`} opacity="0.5">
          <circle cx="0" cy="-7" r="5" fill="#ffb7c5" />
          <circle cx="6.6" cy="-2.2" r="5" fill="#ffb7c5" />
          <circle cx="4.1" cy="5.8" r="5" fill="#ffb7c5" />
          <circle cx="-4.1" cy="5.8" r="5" fill="#ffb7c5" />
          <circle cx="-6.6" cy="-2.2" r="5" fill="#ffb7c5" />
          <circle cx="0" cy="0" r="3" fill="#ff8fa3" />
        </g>
      ))}

      {/* Gold water rings */}
      <circle cx="80"  cy="310" r="18" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="80"  cy="310" r="30" stroke="var(--gold)" strokeWidth="0.5" fill="none" opacity="0.15" />
      <circle cx="220" cy="70"  r="12" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.3" />
    </svg>
  )
}
