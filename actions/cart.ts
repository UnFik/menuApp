import { CartItem } from "@/types"

export const getCartItems = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('cart')
    return items ? JSON.parse(items) : []
  }
  return []
}

export const addToCart = (item: CartItem) => {
  const items = getCartItems()
  const existingItem = items.find((i) => i.id === item.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    items.push({ ...item, quantity: 1 })
  }

  localStorage.setItem('cart', JSON.stringify(items))
  
}

export const removeFromCart = (id: string) => {
  const items = getCartItems()
  const newItems = items.filter((item) => item.id !== id)
  localStorage.setItem('cart', JSON.stringify(newItems))
}

export const updateQuantity = (id: string, quantity: number) => {
  const items = getCartItems()
  const item = items.find((i) => i.id === id)
  
  if (item) {
    item.quantity = quantity
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }
}