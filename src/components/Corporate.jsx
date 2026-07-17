import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const corporateVideos = [
  '/videos/corporate-1.mp4',
  '/videos/corporate-2.mp4',
  '/videos/corporate-3.mp4',
  '/videos/corporate-4.mp4',
]

const contacts = [
  {
    label: 'Канал в Telegram',
    value: '@gastro_chef_in_the_kitchen',
    href: 'https://t.me/gastro_chef_in_the_kitchen',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
  },
  {
    label: 'ВКонтакте',
    value: 'vk.com/chef_in_the_kitchen',
    href: 'https://vk.com/chef_in_the_kitchen',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h4l2 5-2 5H3" />
        <path d="M9 7h4c2.5 0 4 1.5 4 4s-1.5 4-4 4h-4" />
        <path d="M14 7h4" />
      </svg>
    ),
  },
  {
    label: 'Телефон для заказа',
    value: '+7 900 169 26-59',
    href: 'tel:+79001692659',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Telegram для связи',
    value: '@gastroadmini',
    href: 'https://t.me/gastroadmini',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
  },
]

export default function Corporate() {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef([])

  const prev = () => setCurrent((current - 1 + corporateVideos.length) % corporateVideos.length)
  const next = () => setCurrent((current + 1) % corporateVideos.length)

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === current) { v.currentTime = 0; v.play().catch(() => {}) }
      else { v.pause(); v.currentTime = 0 }
    })
  }, [current])

  return (
    <section id="contacts" className="relative py-32 md:py-44 bg-graphite overflow-hidden">
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
                Наши соцсети — 05 / 06
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-pearl mb-10"
            >
              Будьте с нами<br />
              <span className="italic gold-text">на связи.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="max-w-lg text-[15px] text-mute leading-relaxed font-light mb-12"
            >
              Подписывайтесь на наш канал, следите за обновлениями
              в&nbsp;VK или свяжитесь напрямую&nbsp;— ответим на любой вопрос.
            </motion.p>

            <div className="space-y-5">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.value}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                  className="group flex items-center gap-5"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold/70 group-hover:border-gold group-hover:text-gold transition-all duration-500">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] tracking-luxe uppercase text-mute mb-0.5">
                      {c.label}
                    </span>
                    <span className="block font-display text-lg text-pearl/80 group-hover:text-pearl transition-colors duration-500 truncate">
                      {c.value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              {corporateVideos.map((src, i) => (
                <video
                  key={src}
                  ref={el => videoRefs.current[i] = el}
                  src={src}
                  muted
                  playsInline
                  onEnded={i === current ? next : undefined}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))}

              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px 15px rgba(23,23,23,0.7)' }} />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-graphite/80 to-transparent pointer-events-none" />

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gold/40 text-gold/70 hover:border-gold hover:text-gold transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-graphite/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gold/40 text-gold/70 hover:border-gold hover:text-gold transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-graphite/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {corporateVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-gold w-5' : 'bg-gold/30 hover:bg-gold/50'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-5 left-8 right-8">
                <div className="text-[10px] tracking-luxe uppercase text-gold mb-2">
                  Видео с нашей кухни
                </div>
                <div className="font-display text-xl md:text-2xl italic text-pearl leading-tight">
                  Свежие ингредиенты · Авторская подача
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
