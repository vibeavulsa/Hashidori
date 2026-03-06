import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id, e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-kanji">橋鳥</span>
            <span className="footer-logo-name">Hashidori</span>
          </div>
          <p className="footer-tagline">
            Arte japonesa tradicional.<br />
            Gravada na pele. Vivida na alma.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Nav */}
        <nav className="footer-nav">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#hero"       onClick={e => scrollTo('#hero', e)}>Início</a></li>
            <li><a href="#sobre"      onClick={e => scrollTo('#sobre', e)}>Sobre</a></li>
            <li><a href="#portifolio" onClick={e => scrollTo('#portifolio', e)}>Portifólio</a></li>
            <li><a href="#contato"    onClick={e => scrollTo('#contato', e)}>Contato</a></li>
          </ul>
        </nav>

        {/* Styles */}
        <div className="footer-nav">
          <h4>Estilos</h4>
          <ul>
            <li><span>Tradicional Japonês</span></li>
            <li><span>Neo-Tradicional</span></li>
            <li><span>Blackwork</span></li>
            <li><span>Realismo</span></li>
            <li><span>Geométrico</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} Hashidori – Jean Carlos · Todos os direitos reservados
        </p>
        <p className="footer-motto">
          <span>一期一会</span> — &quot;Um encontro, uma vez na vida&quot;
        </p>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}
