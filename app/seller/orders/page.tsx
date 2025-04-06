import type { Metadata } from "next"

import { OrdersTable } from "@/components/seller/orders-table"

export const metadata: Metadata = {
  title: "Orders Management | Nagore Shopping Seller",
  description: "Manage your orders",
}

export default function OrdersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>
      <OrdersTable />
    </div>
  )
}

