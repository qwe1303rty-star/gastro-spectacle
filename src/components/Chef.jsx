import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

const stats = [
  { value: '18', label: 'на кухне' },
  { value: '4', label: 'звезды Michelin' },
  { value: '32', label: 'страны' }
]

export default function Chef() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          video.play().catch(() => {})
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id='chef' ref={ref} className='relative pt-16 pb-32 md:pt-20 md:pb-44 bg-ink overflow-hidden'>
      <div className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink via-ink/80 to-transparent pointer-events-none z-10' />

      <div className='max-w-[1440px] mx-auto px-8 md:px-14'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex items-center justify-center gap-4 mb-8'
          >
            <span className='w-10 h-px bg-gold/60' />
            <span className='text-[11px] tracking-luxe uppercase text-gold font-light'>Наш шеф</span>
            <span className='w-10 h-px bg-gold/60' />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className='font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-pearl mb-6'
          >
            Вкус начинается с <span className='italic gold-text'>ШЕФА.</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20'>
          <div className='lg:col-span-5'>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className='relative aspect-[3/4] overflow-hidden bg-graphite rounded-sm'
            >
              <motion.video
                ref={videoRef}
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover'
              >
                <source src='/videos/chef.mp4' type='video/mp4' />
              </motion.video>
              <div className='absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none' />
              <div className='absolute bottom-6 left-6 right-6 flex items-end justify-between z-10'>
                <div>
                  <div className='text-[10px] tracking-luxe uppercase text-gold mb-1'>Chef</div>
                  <div className='font-display text-2xl text-pearl italic'>Руслан Магамедов</div>
                </div>
                <svg className='w-16 h-8' viewBox='0 0 100 40' fill='none'>
                  <path d='M5 30 Q 15 5, 25 25 T 45 20 Q 60 8, 75 25 T 95 20' stroke='#D4AF37' strokeWidth='0.8' strokeLinecap='round' />
                </svg>
              </div>
            </motion.div>

            <div className='mt-8 flex items-center gap-6 text-[11px] tracking-luxe uppercase text-mute font-light'>
              <span className='text-gold'>★★★★</span>
              <span>Michelin Guide</span>
              <span className='w-1 h-1 rounded-full bg-pearl/30' />
              <span>50 Best</span>
            </div>
          </div>

          <div className='lg:mb-20 mt-8 lg:col-span-7 flex flex-col justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex items-center gap-4 mb-5'
            >
              <span className='w-10 h-px bg-gold/60' />
              <span className='text-[11px] tracking-luxe uppercase text-gold font-light'>
                Шеф — 02 / 06
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className='font-display text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.05] font-light text-pearl mb-8'
            >
              От высокой кухни — к вашему офису.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className='max-w-lg text-[15px] text-pearl/60 leading-relaxed font-light mb-12'
            >
              За нашим гастрономическим спектаклем стоит профессиональный шеф-повар с опытом
              работы в легендарном ресторане «Варвары», входившем в мировой рейтинг
              The World's 50 Best Restaurants, а также в ресторанах «Амбары», «Сезоны»,
              «Куршавель» и Royal Bar Beach Club. Именно его опыт, внимание к деталям
              и высокие стандарты позволяют нам каждый день готовить блюда ресторанного
              уровня в формате корпоративной доставки. Поэтому вы получаете не просто обед,
              а вкус, качество и стабильность, которых ждут от хорошего ресторана.
            </motion.p>

            <div className='grid grid-cols-3 gap-6 md:gap-10'>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className='border-l border-gold/30 pl-5'
                >
                  <div className='font-display text-4xl md:text-5xl gold-text font-light'>{s.value}</div>
                  <div className='mt-2 text-[10px] tracking-luxe uppercase text-mute font-light'>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

