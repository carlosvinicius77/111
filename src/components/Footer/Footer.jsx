import styles from './Footer.module.css'

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/brutasburger', icon: '📷' },
  { name: 'Facebook', href: 'https://facebook.com/brutasburger', icon: '👍' },
  { name: 'TikTok', href: 'https://tiktok.com/@brutasburger', icon: '🎵' },
  { name: 'iFood', href: 'https://ifood.com.br', icon: '🛵' },
]

const navLinks = [
  ['#inicio', 'Início'],
  ['#cardapio', 'Cardápio'],
  ['#sobre', 'Sobre Nós'],
  ['#contato', 'Contato'],
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Marca */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span>🔥</span>
            <span>BRUTUS <span className={styles.accent}>BURGER</span></span>
          </div>
          <p className={styles.tagline}>
            O melhor hambúrguer artesanal da cidade.
            Feito com paixão, entregue com amor.
          </p>
          <div className={styles.socials}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title={s.name}
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.colList}>
            {navLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Horários */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Horários</h4>
          <ul className={styles.colList}>
            <li>Seg – Sex: 11h às 23h</li>
            <li>Sáb – Dom: 11h às 00h</li>
            <li>Feriados: 12h às 22h</li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Brutus Burger Co. Todos os direitos reservados.</p>
          <p>Feito com 🔥 e muito angus</p>
        </div>
      </div>
    </footer>
  )
}
