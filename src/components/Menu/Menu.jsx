import { burgers } from '../../data/burgers'
import BurgerCard from './BurgerCard'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <section id="cardapio" className={styles.menu}>
      <div className="container">
        <p className={styles.eyebrow}>— Nosso Cardápio —</p>
        <h2 className="section-title">
          Feito com <span className="highlight">paixão</span>
        </h2>
        <p className="section-subtitle">
          Cada hambúrguer é preparado na hora com ingredientes selecionados
          e blend de angus artesanal. Escolha o seu favorito!
        </p>

        <div className={styles.grid}>
          {burgers.map((burger) => (
            <BurgerCard key={burger.id} burger={burger} />
          ))}
        </div>
      </div>
    </section>
  )
}
