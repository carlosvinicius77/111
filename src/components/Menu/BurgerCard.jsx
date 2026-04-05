import styles from './Menu.module.css'

// Componente reutilizável de card de hambúrguer
export default function BurgerCard({ burger }) {
  const { name, description, price, badge } = burger

  return (
    <article className={styles.card}>
      {/* Placeholder da imagem */}
      <div className={styles.cardImage}>
        <span className={styles.cardImageIcon}>🍔</span>
        <p className={styles.cardImageLabel}>Imagem aqui</p>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      {/* Informações */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardDesc}>{description}</p>
        <div className={styles.cardFooter}>
          <span className={styles.price}>{price}</span>
          <button className={styles.addBtn}>+ Adicionar</button>
        </div>
      </div>
    </article>
  )
}
