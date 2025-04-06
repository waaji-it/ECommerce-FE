import type { Metadata } from "next"

import CheckoutForm from "@/components/checkout-form"

export const metadata: Metadata = {
  title: "Checkout | Nagore Shopping",
  description: "Complete your purchase",
}

export default function CheckoutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
          <p className="text-muted-foreground">Complete your order</p>
        </div>
        <CheckoutForm />
      </div>
    </div>
  )
}

