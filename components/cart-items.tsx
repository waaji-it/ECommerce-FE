"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

export default function CartItems() {
  const { items, updateItemQuantity, removeItem } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 50 : 0
  const total = subtotal + shipping

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      window.location.href = "/checkout"
    }, 1000)
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground mt-2">Add some products to your cart to continue shopping.</p>
        <Link href="/products" className="mt-4">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="rounded-lg border">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Items in Your Cart</h2>
            <div className="mt-6 divide-y">
              {items.map((item) => (
                <div key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium">
                        <h3>
                          <Link href={`/products/${item.id}`} className="hover:underline">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <p className="text-muted-foreground">Qty</p>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItemQuantity(item.id, Number.parseInt(e.target.value))}
                          className="h-8 w-16"
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <p className="text-muted-foreground">Subtotal</p>
                <p>{formatPrice(subtotal)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Shipping</p>
                <p>{formatPrice(shipping)}</p>
              </div>
              <div className="flex justify-between border-t pt-4">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">{formatPrice(total)}</p>
              </div>
              <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isCheckingOut}>
                {isCheckingOut ? "Processing..." : "Checkout"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

