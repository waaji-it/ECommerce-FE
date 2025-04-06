import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductsTable } from "@/components/seller/products-table"

export const metadata: Metadata = {
  title: "Products Management | Nagore Shopping Seller",
  description: "Manage your products",
}

export default function ProductsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="flex items-center space-x-2">
          <Link href="/seller/products/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>
      <ProductsTable />
    </div>
  )
}

