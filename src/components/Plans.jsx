import { motion } from 'framer-motion'

export default function Plans() {
  return (
    <section id="plans" className="relative py-32 md:py-44 bg-ink">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-10 h-px bg-gold/60" />
            <span className="text-[11px] tracking-luxe uppercase text-gold font-light">Планы — 04 / 06</span>
            <span className="w-10 h-px bg-gold/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-pearl mb-6"
          >
            Комплексные обеды <span className="italic gold-text">для вас.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15px] text-mute font-light"
          >
            Бизнес или стандарт — выберите удобный формат питания на каждый день.
          </motion.p>
        </div>

        {/* Banner image with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/plans-banner.webp`}
            alt="Планы подписки"
            className="w-full h-auto object-cover"
          />

          {/* Top gradient fade */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent pointer-events-none" />

          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent pointer-events-none" />

          {/* Left edge soft blend */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink/60 to-transparent pointer-events-none" />

          {/* Right edge soft blend */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink/60 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
