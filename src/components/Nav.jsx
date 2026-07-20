import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const links = [
  { href: '#menu', label: 'Меню' },
  { href: '#chef', label: 'Шеф' },
  { href: '#plans', label: 'Планы' },
  { href: '#contacts', label: 'Контакты' },
  { href: '#reviews', label: 'Отзывы' }
]

export default function Nav() {
  const { scrollY } = useScroll()
  const { totalItems } = useCart()
  const location = useLocation()
  const isCartPage = location.pathname === '/cart'
  const bg = useTransform(scrollY, [0, 120], ['rgba(11,11,11,0)', 'rgba(11,11,11,0.72)'])
  const blur = useTransform(scrollY, [0, 120], ['blur(0px)', 'blur(18px)'])
  const border = useTransform(scrollY, [0, 120], ['rgba(212,175,55,0)', 'rgba(212,175,55,0.12)'])

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur, borderBottomColor: border }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center transition-all duration-500 group-hover:border-gold">
            <span className="font-display italic text-gold text-sm">Г</span>
          </span>
          <span className="hidden sm:block font-display text-[15px] tracking-soft text-pearl/90">
            Гастрономический <span className="italic text-gold">Спектакль</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {isCartPage ? (
            <Link
              to="/"
              className="text-[13px] tracking-soft text-pearl/70 hover:text-pearl transition-colors duration-500 font-light flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Назад к меню
            </Link>
          ) : (
            links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-soft text-pearl/70 hover:text-pearl transition-colors duration-500 font-light"
              >
                {l.label}
              </a>
            ))
          )}
        </nav>

        <div className="flex items-center gap-6">
          <span className="hidden md:block text-[11px] tracking-luxe uppercase text-pearl/50 font-light">
            +7 900 169 26-59
          </span>
          <div className="relative">
            <Link to="/cart" className="p-2 text-pearl/50 hover:text-gold transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </Link>
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-ink text-[10px] font-medium flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/cart"
            className="group relative overflow-hidden px-5 py-2.5 border border-gold/40 text-[12px] tracking-luxe uppercase text-pearl transition-colors duration-500 hover:text-ink"
          >
            <span className="relative z-10">Заказать</span>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-silk" />
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
