import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import GAS_URL from '../config'

function CartItem({ item, index }) {
  const { updateQty, removeItem } = useCart()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -60, transition: { duration: 0.25 } }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="flex items-center gap-4 md:gap-6 py-5 border-b border-white/[0.06] group"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0 bg-graphite">
        <img
          src={item.poster}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-[17px] md:text-[20px] text-pearl font-light leading-tight truncate">
              {item.name}
            </h3>
            <p className="text-[11px] tracking-luxe uppercase text-pearl/40 mt-1">
              {item.category}
              {item.weight ? ` · ${item.weight}` : ''}
            </p>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="shrink-0 p-1.5 text-pearl/25 hover:text-red-400 transition-colors duration-300"
            title="Удалить"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center bg-graphite rounded-lg overflow-hidden">
            <button
              onClick={() => updateQty(item.id, item.qty - 1)}
              className="w-9 h-9 flex items-center justify-center text-pearl/50 hover:text-pearl hover:bg-white/[0.06] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <span className="w-10 text-center text-[14px] font-medium text-pearl tabular-nums">
              {item.qty}
            </span>
            <button
              onClick={() => updateQty(item.id, item.qty + 1)}
              className="w-9 h-9 flex items-center justify-center text-pearl/50 hover:text-pearl hover:bg-white/[0.06] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          {item.price && (
            <span className="text-[14px] text-pearl/70 font-light tabular-nums">
              {item.price * item.qty} ₽
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function CartPage() {
  const { items, totalItems, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '', comment: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState('')

  const totalPrice = items.reduce((sum, i) => sum + (i.price ? i.price * i.qty : 0), 0)
  const hasPriceItems = items.some((i) => i.price)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const orderItems = items.map((i) => ({
      id: i.id,
      name: i.name,
      category: i.category,
      price: i.price,
      qty: i.qty,
      weight: i.weight,
    }))

    try {
      const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address,
          comment: form.comment,
          items: orderItems,
          totalPrice: totalPrice,
        }),
      })

      const data = await response.json()

      if (data.status === 'ok') {
        setOrderId(data.orderId || '')
        setSubmitted(true)
        clearCart()
      } else {
        setError('Ошибка: ' + (data.message || 'Попробуйте ещё раз'))
      }
    } catch (err) {
      setError('Ошибка сети. Проверьте подключение и попробуйте ещё раз.')
    } finally {
      setSubmitting(false)
    }
  }

  if (items.length === 0 && !submitted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-white/10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-pearl/30">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h2 className="font-display text-[28px] md:text-[34px] text-pearl font-light mb-3">
            Корзина <span className="italic text-gold">пуста</span>
          </h2>
          <p className="text-[14px] text-pearl/40 font-light mb-8 max-w-[320px]">
            Добавьте блюда из меню, чтобы оформить заказ
          </p>
          <Link
            to="/#menu"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-[12px] tracking-luxe uppercase text-gold hover:bg-gold hover:text-ink transition-all duration-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            К меню
          </Link>
        </motion.div>
      </section>
    )
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[400px]"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-[28px] md:text-[34px] text-pearl font-light mb-3">
            Заказ <span className="italic text-gold">принят</span>
          </h2>
          <p className="text-[14px] text-pearl/40 font-light mb-2">
            Мы свяжемся с вами для подтверждения
          </p>
          {orderId && (
            <p className="text-[13px] text-gold/70 font-light mb-8 font-mono">
              Номер заказа: {orderId}
            </p>
          )}
          {!orderId && (
            <p className="mb-8" />
          )}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-[12px] tracking-luxe uppercase text-gold hover:bg-gold hover:text-ink transition-all duration-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            На главную
          </Link>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 md:px-14">
      <div className="max-w-[960px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[12px] tracking-luxe uppercase text-pearl/40 hover:text-gold transition-colors duration-300 mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Назад
          </Link>

          <h1 className="font-display text-[36px] md:text-[48px] text-pearl font-light mb-2">
            Ваш <span className="italic text-gold">заказ</span>
          </h1>
          <p className="text-[13px] text-pearl/40 font-light mb-10">
            {totalItems} {totalItems === 1 ? 'позиция' : totalItems < 5 ? 'позиции' : 'позиций'} в корзине
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <CartItem key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>

            {hasPriceItems && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-between pt-6"
              >
                <span className="text-[13px] text-pearl/50 font-light uppercase tracking-luxe">
                  Итого
                </span>
                <span className="font-display text-[22px] text-gold font-light">
                  {totalPrice} ₽
                </span>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="w-full lg:w-[380px] shrink-0"
          >
            <div className="bg-graphite rounded-xl p-6 md:p-8 border border-white/[0.04]">
              <h2 className="font-display text-[22px] text-pearl font-light mb-6">
                Оформление <span className="italic text-gold">заказа</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[11px] tracking-luxe uppercase text-pearl/40 mb-2 font-light">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ваше имя"
                    className="w-full bg-ink border border-white/[0.08] rounded-lg px-4 py-3 text-[14px] text-pearl placeholder-pearl/25 font-light focus:outline-none focus:border-gold/40 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-luxe uppercase text-pearl/40 mb-2 font-light">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-ink border border-white/[0.08] rounded-lg px-4 py-3 text-[14px] text-pearl placeholder-pearl/25 font-light focus:outline-none focus:border-gold/40 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-luxe uppercase text-pearl/40 mb-2 font-light">
                    Адрес доставки
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="Город, улица, дом"
                    className="w-full bg-ink border border-white/[0.08] rounded-lg px-4 py-3 text-[14px] text-pearl placeholder-pearl/25 font-light focus:outline-none focus:border-gold/40 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-luxe uppercase text-pearl/40 mb-2 font-light">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Пожелания к заказу"
                    className="w-full bg-ink border border-white/[0.08] rounded-lg px-4 py-3 text-[14px] text-pearl placeholder-pearl/25 font-light focus:outline-none focus:border-gold/40 transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative overflow-hidden mt-2 w-full py-3.5 rounded-lg text-[12px] tracking-luxe uppercase font-light border border-gold/40 text-pearl hover:text-ink transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {submitting ? 'Отправляем...' : 'Оформить заказ'}
                  </span>
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-silk" />
                </button>

                {error && (
                  <p className="text-[12px] text-red-400 font-light text-center mt-2">
                    {error}
                  </p>
                )}
              </form>

              <p className="text-[11px] text-pearl/25 font-light text-center mt-4">
                Нажимая «Оформить заказ», вы соглашаетесь с условиями доставки
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
