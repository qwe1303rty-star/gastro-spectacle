import { motion } from 'framer-motion'

const items = [
  { n: '01', title: 'Свежие ингредиенты', body: 'Продукты приходят на кухню в 05:00 и уже к 08:00 превращаются в готовые блюда. Никаких заморозок и полуфабрикатов.' },
  { n: '02', title: 'Ручная работа', body: 'Каждое блюдо собирает один повар от первого штриха до последнего листа микрозелени. Не конвейер — авторство.' },
  { n: '03', title: 'Термо-упаковка', body: 'Многослойные боксы держат температуру подачи 90 минут. Блюдо попадает к вам ровно таким, каким его задумал шеф.' },
  { n: '04', title: 'Доставка за 40 мин', body: 'Собственный парк курьеров работает с 09:00 до 23:00. Точное время подачи — вы выбираете его сами.' }
]

export default function Advantages() {
  return (
    <section className="relative py-32 md:py-44 bg-graphite">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-10 h-px bg-gold/60" />
            <span className="text-[11px] tracking-luxe uppercase text-gold font-light">
              Преимущества — 03 / 06
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-pearl"
          >
            Четыре причины,<br />
            <span className="italic gold-text">почему это работает.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="flex items-baseline gap-6 mb-4">
                <span className="font-mono text-[11px] tracking-luxe text-gold">{it.n}</span>
                <div className="flex-1 h-px bg-line group-hover:bg-gold/40 transition-colors duration-700" />
              </div>
              <h3 className="font-display text-2xl md:text-[28px] font-light text-pearl mb-4">{it.title}</h3>
              <p className="text-[14px] text-mute leading-relaxed font-light max-w-md">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
