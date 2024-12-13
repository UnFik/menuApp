"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CartItem } from "@/types"
import { getCartItems } from "@/actions/cart"

interface CartContextType {
  cartCount: number
  updateCartCount: () => void
}

const CartContext = createContext<CartContextType>({
  cartCount: 0,
  updateCartCount: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0)

  const updateCartCount = () => {
    const items = getCartItems()
    const count = items.reduce((acc, item) => acc + item.quantity, 0)
    setCartCount(count)
  }

  useEffect(() => {
    updateCartCount()
  }, [])

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext) 