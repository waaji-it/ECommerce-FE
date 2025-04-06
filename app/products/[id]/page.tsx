import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import AddToCartButton from "@/components/add-to-cart-button"
import { getProductById } from "@/lib/data"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | Nagore Shopping",
    }
  }

  return {
    title: `${product.name} | Nagore Shopping`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex items-center justify-center overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <div className="text-3xl font-bold">₹{product.price.toFixed(2)}</div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>{product.description}</p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <AddToCartButton product={product} />
            <Button variant="outline">Add to Wishlist</Button>
          </div>
          <div className="mt-8">
            <h2 className="mb-2 text-xl font-semibold">Product Details</h2>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              {product.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>    
        </div>
      </div>
    </div>
  )
}

