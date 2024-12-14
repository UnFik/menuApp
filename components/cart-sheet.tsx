"use client"

import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { CartItem } from "@/types"
import { getCartItems, removeFromCart, updateQuantity } from "@/actions/cart"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

export function CartSheet() {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)
  const { cartCount, updateCartCount } = useCart()

  useEffect(() => {
    setItems(getCartItems())
  }, [open])

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity)
    setItems(getCartItems())
    updateCartCount()
  }

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
    setItems(getCartItems())
    updateCartCount()
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Keranjang Belanja</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Keranjang kosong</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      ×
                    </Button>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <Button className="w-full mt-4">Checkout</Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}