import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        {/* Conteúdo principal */}
        <div className={styles.content}>
          <span className={styles.badge}>🔥 Artesanal &amp; Irresistível</span>

          <h1 className={styles.title}>
            O hambúrguer que vai
            <span className={styles.accent}> mudar sua vida</span>
          </h1>

          <p className={styles.slogan}>
            Feito com blend de angus selecionado, ingredientes frescos e uma
            pitada de paixão. Cada mordida é uma experiência única e inesquecível.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.ctaPrimary}
              onClick={() => scrollTo('#cardapio')}
            >
              🍔 Peça Agora
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() => scrollTo('#sobre')}
            >
              Conheça a gente
            </button>
          </div>

          {/* Estatísticas */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>6+</strong>
              <span>Hambúrgueres</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>500+</strong>
              <span>Clientes felizes</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>5★</strong>
              <span>Avaliação</span>
            </div>
          </div>
        </div>

        {/* Placeholder da imagem principal */}
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.imageIcon}>🍔</span>
            <p>Imagem do produto aqui</p>
            <small>Substitua por uma foto real do hambúrguer</small>
          </div>
          {/* Anéis decorativos animados */}
          <div className={styles.ring1} />
          <div className={styles.ring2} />
        </div>
      </div>

      {/* Brilho de fundo decorativo */}
      <div className={styles.bgGlow} />
    </section>
  )
}
