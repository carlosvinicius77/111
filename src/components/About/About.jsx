import styles from './About.module.css'

// Destaques da hamburgueria
const highlights = [
  { icon: '🥩', label: 'Blend Angus 100%' },
  { icon: '🍞', label: 'Pão Brioche Artesanal' },
  { icon: '🌿', label: 'Ingredientes Frescos' },
  { icon: '❤️', label: 'Feito com Amor' },
]

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={`container ${styles.inner}`}>

        {/* Placeholder da imagem */}
        <div className={styles.imagePlaceholder}>
          <span className={styles.imageIcon}>🏪</span>
          <p>Foto do restaurante aqui</p>
          <small>Substitua por uma imagem real do estabelecimento</small>
        </div>

        {/* Texto institucional */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>— Nossa História —</p>

          <h2 className={styles.title}>
            Nascemos do amor
            <br />
            <span className={styles.accent}>pela boa comida</span>
          </h2>

          <p className={styles.text}>
            A Brutus Burger Co. nasceu em 2018, na cozinha de um apartamento
            pequenininho, com um sonho grande: criar o hambúrguer perfeito. Hoje,
            somos referência em hambúrgueres artesanais na cidade, com uma
            clientela fiel que volta toda semana.
          </p>

          <p className={styles.text}>
            Usamos apenas blend de angus com a proporção de gordura certa, pão
            brioche artesanal assado toda manhã e ingredientes frescos
            selecionados diariamente. Cada detalhe importa, cada mordida conta.
          </p>

          {/* Destaques */}
          <div className={styles.highlights}>
            {highlights.map((item) => (
              <div key={item.label} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{item.icon}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
