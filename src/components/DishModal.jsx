import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.35, delay: 0.05 } }
}

const modal = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0, scale: 0.95, y: 20,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function DishModal({ dish, onClose, onSaveTime, restoreTime }) {
  const videoRef = useRef(null)
  const { addItem, updateQty, getQty } = useCart()
  const qty = getQty(dish.id)
  const inCart = qty > 0

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    try { v.currentTime = 0 } catch {}
    const p = v.play()
    if (p && typeof p.catch === 'function') p.catch(() => {})
  }, [dish, restoreTime])

  const handleClose = () => {
    const v = videoRef.current
    if (v && onSaveTime) {
      onSaveTime(dish.id, v.currentTime)
    }
    onClose()
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleClose])

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={handleClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-ink/80 backdrop-blur-md"
      >
        <motion.div
          key="modal"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-graphite rounded-sm max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-ink/60 backdrop-blur-sm flex items-center justify-center text-pearl/60 hover:text-pearl hover:bg-ink/80 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            {/* Video */}
            <div className="relative w-full bg-ink">
              <video
                ref={videoRef}
                src={dish.video}
                poster={dish.poster}
                muted
                playsInline
                preload="auto"
                className="w-full max-h-[50vh] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-graphite/80 to-transparent" />
            </div>

            {/* Text content */}
            <div className="px-8 md:px-10 py-8">
              {/* Category */}
              <span className="font-mono text-[10px] tracking-luxe uppercase text-gold/60">
                {dish.category}
              </span>

              {/* Title + price */}
              <div className="flex items-baseline justify-between mt-3 mb-4">
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-pearl font-light">
                  {dish.name}
                </h2>
                {dish.price && (
                  <span className="text-gold text-[clamp(1.25rem,2.5vw,1.75rem)] font-light shrink-0 ml-4">
                    {dish.price} ₽
                  </span>
                )}
              </div>

              {/* Weight */}
              {dish.weight && (
                <p className="text-[13px] text-pearl/45 font-light mb-5">
                  {dish.weight}
                </p>
              )}

              {/* Description */}
              {dish.description && (
                <p className="text-[14px] text-pearl/65 font-light leading-relaxed mb-6">
                  {dish.description}
                </p>
              )}

              {/* Ingredients */}
              <div className="mb-6">
                <h4 className="text-[11px] tracking-luxe uppercase text-pearl/35 font-light mb-2.5">
                  Состав
                </h4>
                <p className="text-[13px] text-pearl/60 font-light leading-relaxed">
                  {dish.ingredients.join(' · ')}
                </p>
              </div>

              {/* Options */}
              {dish.options && dish.options.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-[11px] tracking-luxe uppercase text-pearl/35 font-light mb-3">
                    Варианты
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dish.options.map((opt) => (
                      <span
                        key={opt.label}
                        className="px-4 py-2 rounded-full bg-white/5 text-pearl/60 text-[12px] font-light"
                      >
                        {opt.label} — <span className="text-gold">{opt.price} ₽</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cart controls */}
              <div className="pt-5 border-t border-white/10">
                {!inCart ? (
                  <button
                    onClick={() => addItem(dish)}
                    className="w-full py-3.5 rounded-lg text-[13px] tracking-wider uppercase font-light bg-gold text-ink hover:bg-gold/80 transition-all duration-300"
                  >
                    В корзину — {dish.price ? `${dish.price} ₽` : ''}
                  </button>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex-1 flex items-center justify-between bg-gold rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQty(dish.id, qty - 1)}
                        className="w-14 h-12 flex items-center justify-center text-ink hover:bg-gold/80 transition-colors duration-200"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <span className="text-[16px] font-medium text-ink tabular-nums">{qty}</span>
                      <button
                        onClick={() => updateQty(dish.id, qty + 1)}
                        className="w-14 h-12 flex items-center justify-center text-ink hover:bg-gold/80 transition-colors duration-200"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-gold text-[16px] font-light tabular-nums">
                      {dish.price ? `${dish.price * qty} ₽` : ''}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
