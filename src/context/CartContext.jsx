import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = useCallback((dish) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === dish.id)
      if (exists) {
        return prev.map((i) => i.id === dish.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...dish, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id))
    } else {
      setItems((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i))
    }
  }, [])

  const getQty = useCallback((id) => {
    const item = items.find((i) => i.id === id)
    return item ? item.qty : 0
  }, [items])

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, getQty, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
