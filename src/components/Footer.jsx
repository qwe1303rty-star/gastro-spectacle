import { motion } from 'framer-motion'

const cols = [
  { title: 'Меню', links: ['Signature', 'Основные блюда', 'Лёгкие', 'Десерты', 'Wine pairing'] },
  { title: 'О нас', links: ['Шеф', 'Философия', 'Кухня', 'Продукты', 'Пресса'] },
  { title: 'Клиентам', links: ['Планы подписки', 'Корпоративно', 'Кейтеринг', 'Подарочные карты', 'Контакты'] }
]

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-line pt-24 pb-10">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] font-light text-pearl tracking-tight">
            Гастрономический
            <br />
            <span className="italic gold-text">Спектакль.</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mb-16">
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-5">Заказ</div>
            <div className="text-pearl font-display text-2xl mb-3">+7 495 000 00 00</div>
            <div className="text-[13px] text-mute font-light leading-relaxed">
              Москва, ул. Пятницкая 27<br />
              Ежедневно · 09:00 — 23:00
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[10px] tracking-luxe uppercase text-gold mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-pearl/70 hover:text-gold transition-colors duration-500 font-light">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mb-8 opacity-40" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[11px] tracking-luxe uppercase text-mute font-light">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center">
              <span className="font-display italic text-gold text-sm">Г</span>
            </span>
            © 2024–2026 Гастрономический Спектакль
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors duration-500">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors duration-500">Telegram</a>
            <a href="#" className="hover:text-gold transition-colors duration-500">YouTube</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors duration-500">Оферта</a>
            <a href="#" className="hover:text-gold transition-colors duration-500">Конфиденциальность</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
