import type { Product } from "@/lib/types"
import ProductGrid from "./product-grid"

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      <ProductGrid products={products} />
    </div>
  )
}

