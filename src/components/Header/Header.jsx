import { useState, useEffect } from 'react'
import styles from './Header.module.css'

// Links de navegação
const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detecta scroll para aplicar estilo ao header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#inicio"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, '#inicio')}
        >
          <span className={styles.logoIcon}>🔥</span>
          <span>BRUTUS <span className={styles.logoAccent}>BURGER</span></span>
        </a>

        {/* Navegação desktop */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cardapio"
            className={styles.navCta}
            onClick={(e) => handleNavClick(e, '#cardapio')}
          >
            Peça Agora
          </a>
        </nav>

        {/* Botão menu mobile (hamburger) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cardapio"
          className={styles.mobileCta}
          onClick={(e) => handleNavClick(e, '#cardapio')}
        >
          Peça Agora
        </a>
      </div>
    </header>
  )
}
