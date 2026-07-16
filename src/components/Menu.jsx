import { motion } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'
import { dishes, categories } from '../data/dishes'
import DishCard from './DishCard'
import DishModal from './DishModal'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Все')
  const [modalDish, setModalDish] = useState(null)
  const videoTimes = useRef({})

  const openModal = useCallback((dish) => {
    setModalDish(dish)
  }, [])

  const closeModal = useCallback(() => {
    setModalDish(null)
  }, [])

  const saveTime = useCallback((id, time) => {
    videoTimes.current[id] = time
  }, [])

  const getTime = useCallback((id) => {
    return videoTimes.current[id] || 0
  }, [])

  const filtered = activeCategory === 'Все'
    ? dishes
    : dishes.filter((d) => d.category === activeCategory)

  return (
    <section id="menu" className="relative bg-ink py-32 md:py-44">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-10 h-px bg-gold/60" />
              <span className="text-[11px] tracking-luxe uppercase text-gold font-light">
                Меню — {activeCategory}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] font-light text-pearl"
            >
              Нажмите на блюдо —<br />
              <span className="italic gold-text">узнайте историю.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-[14px] text-mute leading-relaxed font-light"
          >
            Каждое блюдо — маленький фильм о вкусе. Нажмите,
            чтобы увидеть полную историю и добавить в корзину.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[12px] tracking-wider uppercase font-light transition-all duration-400 ${
                activeCategory === cat
                  ? 'bg-gold text-ink'
                  : 'bg-white/5 text-pearl/50 hover:bg-white/10 hover:text-pearl/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          key={activeCategory}
        >
          {filtered.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <DishCard
                dish={dish}
                index={i}
                onClick={() => openModal(dish)}
              />
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[11px] tracking-luxe uppercase text-mute font-light"
        >
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-gold" />
            Меню обновляется каждый сезон
          </div>
          <span className="text-pearl/40">
            {filtered.length} {filtered.length === 1 ? 'блюдо' : filtered.length < 5 ? 'блюда' : 'блюд'}
          </span>
        </motion.div>
      </div>

      {/* Modal */}
      {modalDish && (
        <DishModal
          dish={modalDish}
          onClose={closeModal}
          onSaveTime={saveTime}
          restoreTime={getTime(modalDish.id)}
        />
      )}
    </section>
  )
}
