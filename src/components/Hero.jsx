import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section id="top" ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" draggable={false}>
          <source src={`${import.meta.env.BASE_URL}videos/hero.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full max-w-[1440px] mx-auto px-8 md:px-14 flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-10 h-px bg-gold/60" />
          <span className="text-[11px] tracking-luxe uppercase text-gold font-light">
            Est. 2024 — Moscow
          </span>
        </motion.div>

        <div className="max-w-[1100px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.98] font-light text-pearl tracking-tight"
          >
            Каждое блюдо —<br />
            <span className="italic gold-text">гастрономический</span>
            <br />
            <span className="italic gold-text">спектакль.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-xl text-[15px] md:text-base text-pearl/60 leading-relaxed font-light"
        >
          Мы показываем не просто готовую еду.
          <br />
          Мы показываем, из чего рождается вкус.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center gap-6"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-4 px-9 py-5 border border-gold/50 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-silk" />
            <span className="relative z-10 text-[12px] tracking-luxe uppercase text-pearl group-hover:text-ink transition-colors duration-500">
              Смотреть меню
            </span>
            <svg
              className="relative z-10 w-4 h-4 text-pearl group-hover:text-ink transition-all duration-500 group-hover:translate-x-1"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#chef"
            className="group inline-flex items-center gap-3 text-[12px] tracking-luxe uppercase text-pearl/70 hover:text-gold transition-colors duration-500"
          >
            <span className="w-8 h-px bg-current" />
            История шефа
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-8 md:left-14 right-8 md:right-14 z-10 flex items-end justify-between text-[11px] tracking-luxe uppercase text-pearl/40 font-light">
        <div className="flex flex-col gap-2">
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="block w-px h-10 bg-gold/60"
          />
        </div>
        <div className="hidden md:flex gap-8">
          <div><div className="text-pearl/30 mb-1">01</div><div>Меню</div></div>
          <div><div className="text-pearl/30 mb-1">02</div><div>Шеф</div></div>
          <div><div className="text-pearl/30 mb-1">03</div><div>Планы</div></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ink pointer-events-none z-10" />
    </section>
  )
}
