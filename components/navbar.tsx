import Link from "next/link"
import { CartSheet } from "./cart-sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="text-xl font-bold sm:ps-44 ps-4">Restaurant Menu</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-4 pe-3 sm:pe-0">
          <CartSheet />
        </div>
      </div>
    </header>
  )
}