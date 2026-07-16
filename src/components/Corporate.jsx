import { motion } from 'framer-motion'

export default function Corporate() {
  return (
    <section id="corporate" className="relative py-32 md:py-44 bg-graphite overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-10 h-px bg-gold/60" />
              <span className="text-[11px] tracking-luxe uppercase text-gold font-light">
                Корпоративное питание — 05 / 06
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-pearl mb-10"
            >
              Гастрономия<br />
              <span className="italic gold-text">для вашего офиса.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="max-w-lg text-[15px] text-mute leading-relaxed font-light mb-10"
            >
              Ежедневные обеды, тематические ужины, дегустационные вечера и
              кейтеринг мероприятий. От 10 до 500 персон — с той же безукоризненной
              подачей, что и в частном заказе.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 md:gap-14 mb-14 max-w-lg">
              {[
                { v: '150+', l: 'корпоративных клиентов' },
                { v: '98%', l: 'продлевают договор' }
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                  className="border-l border-gold/30 pl-5"
                >
                  <div className="font-display text-4xl md:text-5xl gold-text font-light">{s.v}</div>
                  <div className="mt-2 text-[10px] tracking-luxe uppercase text-mute">{s.l}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group inline-flex items-center gap-4 px-9 py-5 border border-gold/50 overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-silk" />
              <span className="relative z-10 text-[12px] tracking-luxe uppercase text-pearl group-hover:text-ink transition-colors duration-500">
                Запросить презентацию
              </span>
              <svg className="relative z-10 w-4 h-4 text-pearl group-hover:text-ink transition-all duration-500 group-hover:translate-x-1"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img src="/images/dish-frame.jpg" alt="" className="w-full h-full object-cover" draggable={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[10px] tracking-luxe uppercase text-gold mb-2">Case study</div>
                <div className="font-display text-2xl italic text-pearl leading-tight">
                  Сбер · Яндекс · ВТБ Капитал
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
