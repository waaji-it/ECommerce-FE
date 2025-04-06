import Link from "next/link"
import type { Metadata } from "next"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Order Confirmation | Nagore Shopping",
  description: "Your order has been placed successfully",
}

export default function OrderConfirmationPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
        <Check className="h-10 w-10 text-primary-foreground" />
      </div>
      <h1 className="mt-6 text-3xl font-bold">Order Confirmed!</h1>
      <p className="mt-2 text-center text-muted-foreground">
        Thank you for your purchase. Your order has been placed and will be processed soon.
      </p>
      <p className="mt-4 text-center font-medium">Order #12345</p>
      <p className="text-center text-muted-foreground">A confirmation email has been sent to your email address.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
        <Link href="/orders">
          <Button variant="outline">View Orders</Button>
        </Link>
      </div>
    </div>
  )
}

