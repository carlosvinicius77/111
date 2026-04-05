import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <p className={styles.eyebrow}>— Depoimentos —</p>
        <h2 className="section-title">
          O que nossos clientes <span className="highlight">dizem</span>
        </h2>
        <p className="section-subtitle">
          Não acredite apenas em nós — veja o que quem já provou tem a dizer
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              {/* Estrelas */}
              <div className={styles.stars} aria-label={`${testimonial.rating} estrelas`}>
                {'★'.repeat(testimonial.rating)}
              </div>

              {/* Depoimento */}
              <blockquote className={styles.quote}>
                "{testimonial.text}"
              </blockquote>

              {/* Autor */}
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div>
                  <strong className={styles.name}>{testimonial.name}</strong>
                  <span className={styles.role}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
