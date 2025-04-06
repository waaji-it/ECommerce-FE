"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"
import { toast } from "sonner"

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("upi")
  const router = useRouter()
  const { items, clearCart } = useCart()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 50 : 0
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      toast("Order placed successfully!", {
        description: "Your order has been placed and will be processed soon.",
      })
      clearCart()
      router.push("/order-confirmation")
    }, 2000)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal-code">Postal code</Label>
                <Input id="postal-code" required />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi">UPI</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit/Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">Cash on Delivery</Label>
              </div>
            </RadioGroup>

            {paymentMethod === "upi" && (
              <div className="space-y-2">
                <Label htmlFor="upi-id">UPI ID</Label>
                <Input id="upi-id" placeholder="yourname@upi" required />
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-month">Expiry Month</Label>
                    <Input id="expiry-month" placeholder="MM" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry-year">Expiry Year</Label>
                    <Input id="expiry-year" placeholder="YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Place Order"}
          </Button>
        </form>
      </div>

      <div>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span>{item.quantity} ×</span>
                    <span>{item.name}</span>
                  </div>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

