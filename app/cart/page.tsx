import type { Metadata } from "next"

import CartItems from "@/components/cart-items"

export const metadata: Metadata = {
  title: "Shopping Cart | Nagore Shopping",
  description: "View and manage your shopping cart",
}

export default function CartPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
          <p className="text-muted-foreground">Review and manage your items</p>
        </div>
        <CartItems />
      </div>
    </div>
  )
}

