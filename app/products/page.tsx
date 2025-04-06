import { Suspense } from "react"
import type { Metadata } from "next"

import { getProducts } from "@/lib/data"
import ProductList from "@/components/product-list"
import ProductsLoading from "./loading"

export const metadata: Metadata = {
  title: "Products | Nagore Shopping",
  description: "Browse our wide selection of products",
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Browse our collection of products</p>
        </div>
      </div>
      <Suspense fallback={<ProductsLoading />}>
        <ProductList products={products} />
      </Suspense>
    </div>
  )
}

