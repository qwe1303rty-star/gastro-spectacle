import { useCart } from '../context/CartContext'

export default function DishCard({ dish, index, onClick }) {
  const { addItem, updateQty, getQty } = useCart()
  const qty = getQty(dish.id)
  const inCart = qty > 0

  const handleAdd = (e) => {
    e.stopPropagation()
    addItem(dish)
  }

  return (
    <div
      className="relative cursor-pointer group flex flex-col bg-graphite overflow-hidden rounded-sm"
      onClick={() => onClick(dish)}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={dish.poster}
          alt={dish.name}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {dish.softEdge && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 40px 20px #131313' }}
          />
        )}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6 pointer-events-none">
          <span className="font-mono text-[10px] tracking-luxe text-pearl/40">
            {dish.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      </div>

      {/* Info — not overlapping image */}
      <div className="bg-ink/90 px-5 md:px-6 pt-4 pb-5 md:pb-6">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-display text-[20px] md:text-[24px] leading-tight text-pearl font-light">
            {dish.name}
          </h3>
          {dish.weight ? (
            <span className="text-[11px] tracking-luxe uppercase text-pearl/45 font-light shrink-0 ml-3">
              {dish.weight}
            </span>
          ) : null}
        </div>

        <div className="text-[12px] text-pearl/55 font-light leading-relaxed line-clamp-2">
          {dish.ingredients.join(' · ')}
        </div>

        {/* Buttons */}
        <div className="mt-3 pt-3 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-2">
            {!inCart ? (
              <button
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-[11px] tracking-wider uppercase font-light bg-white/5 text-pearl/60 hover:bg-white/10 hover:text-pearl transition-all duration-300"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                В корзину
              </button>
            ) : (
              <div className="flex-1 flex items-center justify-between bg-gold rounded-lg overflow-hidden">
                <button
                  onClick={() => updateQty(dish.id, qty - 1)}
                  className="w-12 h-11 flex items-center justify-center text-ink hover:bg-gold/80 transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <span className="text-[14px] font-medium text-ink tabular-nums">{qty}</span>
                <button
                  onClick={() => updateQty(dish.id, qty + 1)}
                  className="w-12 h-11 flex items-center justify-center text-ink hover:bg-gold/80 transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            )}
            <button
              onClick={() => onClick(dish)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-[11px] tracking-wider uppercase font-light border border-white/10 text-pearl/50 hover:border-gold/40 hover:text-gold transition-all duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
