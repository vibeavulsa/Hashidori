import { useState, useRef } from 'react'
import LiquidGlass from 'liquid-glass-react'
import './Contact.css'

const styleOptions = ['Tradicional Japonês', 'Neo-Tradicional', 'Blackwork', 'Realismo', 'Geométrico', 'Outro']

export default function Contact() {
  const containerRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    contact: '',
    style: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // In a real app this would send data to a backend/API
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', contact: '', style: '', message: '' })
  }

  return (
    <section id="contato" className="contact" ref={containerRef}>
      <div className="contact-container">
        {/* Info side */}
        <div className="contact-info">
          <p className="section-label">Contato</p>

          <h2 className="section-heading contact-heading">
            Vamos criar<br />
            <em>Sua Arte</em>
          </h2>

          <p className="contact-body">
            Atendo em estúdio próprio — com hora marcada e projeto exclusivo.
            Cada sessão começa com uma conversa sobre a sua história, intenção
            e o lugar perfeito no corpo para a sua peça.
          </p>

          <div className="contact-details">
            <ContactItem kanji="場" label="Estúdio" value="Hashidori Studio — São Paulo, SP" />
            <ContactItem kanji="時" label="Horários" value="Terça a Sábado · 10h – 19h" />
            <ContactItem kanji="話" label="Instagram" value="@hashidori.tattoo" link="https://instagram.com" />
            <ContactItem kanji="声" label="WhatsApp" value="(11) 9 ••••-••••" />
          </div>

          <div className="contact-quote">
            <span className="quote-kanji">刺青</span>
            <p>
              <em>
                &quot;A tatuagem não é apenas decoração —<br />
                é o mapa da sua jornada.&quot;
              </em>
            </p>
          </div>
        </div>

        {/* Form side */}
        <div className="contact-form-wrap">
          <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={35}
            blurAmount={0.1}
            saturation={125}
            aberrationIntensity={1.2}
            elasticity={0.15}
            cornerRadius={24}
            className="contact-glass"
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Agendar Consulta</h3>

              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Instagram / WhatsApp</label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="@usuario ou (11) 9xxxx-xxxx"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="style">Estilo desejado</label>
                <select
                  id="style"
                  name="style"
                  value={form.style}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione um estilo</option>
                  {styleOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Conte sobre sua ideia</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Descreva sua ideia, tamanho, local no corpo..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <LiquidGlass
                mouseContainer={containerRef}
                displacementScale={48}
                blurAmount={0.08}
                saturation={135}
                aberrationIntensity={1.8}
                elasticity={0.25}
                cornerRadius={999}
                padding="0"
                className="submit-glass"
              >
                <button type="submit" className="submit-btn">
                  {sent ? '✓ Mensagem enviada!' : 'Enviar →'}
                </button>
              </LiquidGlass>

              {sent && (
                <p className="form-success">
                  Obrigado! Entraremos em contato em até 24h. 橋鳥
                </p>
              )}
            </form>
          </LiquidGlass>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ kanji, label, value, link }) {
  return (
    <div className="contact-item">
      <span className="contact-item-kanji">{kanji}</span>
      <div>
        <span className="contact-item-label">{label}</span>
        {link ? (
          <a href={link} className="contact-item-value contact-item-link" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <span className="contact-item-value">{value}</span>
        )}
      </div>
    </div>
  )
}
