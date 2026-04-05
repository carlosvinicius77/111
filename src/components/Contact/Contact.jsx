import styles from './Contact.module.css'

// Link do WhatsApp simulado (sem API real)
const WHATSAPP_LINK =
  'https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Brutus%20Burger%20Co.'

const contactInfo = [
  {
    icon: '📍',
    label: 'Endereço',
    lines: ['Rua das Hamburguesas, 404', 'Bairro Smash, São Paulo - SP', 'CEP: 01310-100'],
  },
  {
    icon: '📞',
    label: 'Telefone',
    lines: ['(11) 9 9999-9999'],
  },
  {
    icon: '🕐',
    label: 'Horário de Funcionamento',
    lines: ['Seg – Sex: 11h às 23h', 'Sáb – Dom: 11h às 00h', 'Feriados: 12h às 22h'],
  },
]

export default function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className={`container ${styles.inner}`}>

        {/* Informações de contato */}
        <div className={styles.info}>
          <p className={styles.eyebrow}>— Fale Conosco —</p>
          <h2 className={styles.title}>
            Vem nos <span className={styles.accent}>visitar!</span>
          </h2>
          <p className={styles.subtitle}>
            Estamos esperando você com aquele hambúrguer delicioso. Pode vir!
          </p>

          <ul className={styles.contactList}>
            {contactInfo.map((item) => (
              <li key={item.label} className={styles.contactItem}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Botão WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <span>💬</span>
            Chamar no WhatsApp
          </a>
        </div>

        {/* Placeholder do mapa */}
        <div className={styles.mapPlaceholder}>
          <span className={styles.mapIcon}>🗺️</span>
          <p>Mapa aqui</p>
          <small>Substitua por um Google Maps embed</small>
          <small>Rua das Hamburguesas, 404 — SP</small>
        </div>
      </div>
    </section>
  )
}
