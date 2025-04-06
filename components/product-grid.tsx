import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group relative overflow-hidden rounded-lg border"
        >
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <p className="mt-2 font-medium">₹{product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

