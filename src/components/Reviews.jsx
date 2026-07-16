import { motion } from 'framer-motion'
import { useState } from 'react'

const reviews = [
  { text: 'Это не еда — это опыт. Каждый раз ощущение, что заказал ужин из ресторана со звездой Michelin. Подача, вкус, детали.',
    author: 'Ирина К.', role: 'Основатель digital-агентства', rating: 5 },
  { text: 'Пробовала многие сервисы доставки. «Спектакль» — единственный, где чувствуется рука шефа. И блюдо приходит горячим.',
    author: 'Максим Д.', role: 'Ресторанный критик', rating: 5 },
  { text: 'Взял корпоративный план для команды. Продуктивность вверх, жалоб ноль, все спрашивают, где заказать домой. Идеально.',
    author: 'Артём Л.', role: 'CEO венчурного фонда', rating: 5 }
]

export default function Reviews() {
  const [i, setI] = useState(0)
  const r = reviews[i]

  return (
    <section id="reviews" className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className="w-10 h-px bg-gold/60" />
          <span className="text-[11px] tracking-luxe uppercase text-gold font-light">Отзывы — 06 / 06</span>
          <span className="w-10 h-px bg-gold/60" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-16 mx-auto text-gold/50 mb-10"
            viewBox="0 0 32 32" fill="currentColor"
          >
            <path d="M6 20c0-4 3-8 8-9v3c-3 1-5 3-5 6h5v6H6v-6zm12 0c0-4 3-8 8-9v3c-3 1-5 3-5 6h5v6h-8v-6z" />
          </motion.svg>

          <motion.blockquote
            key={r.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(1.5rem,2.6vw,2.5rem)] leading-[1.3] italic text-pearl font-light mb-10"
          >
            «{r.text}»
          </motion.blockquote>

          <motion.div
            key={r.author}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-gold text-[12px] tracking-luxe uppercase mb-2">{'★'.repeat(r.rating)}</div>
            <div className="font-display text-xl text-pearl">{r.author}</div>
            <div className="text-[11px] tracking-luxe uppercase text-mute mt-1">{r.role}</div>
          </motion.div>

          <div className="flex items-center justify-center gap-4">
            {reviews.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className="group flex items-center gap-4">
                <span className={`transition-all duration-500 ${
                  idx === i ? 'w-12 bg-gold' : 'w-6 bg-white/15 group-hover:bg-white/40'
                } h-px block`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
