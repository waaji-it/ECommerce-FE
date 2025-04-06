"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    setIsLoading(true)

    // Simulate network request
    setTimeout(() => {
      addItem(product)
      setIsLoading(false)
      toast("Added to cart", {
        description: `${product.name} has been added to your cart.`,
      })
    }, 500)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? (
        "Adding..."
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  )
}

