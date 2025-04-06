"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, MoreHorizontal } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2023-04-01",
    total: 1999.0,
    status: "delivered",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Alice Smith",
    email: "alice.smith@example.com",
    date: "2023-04-02",
    total: 3499.0,
    status: "processing",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Robert Johnson",
    email: "robert.johnson@example.com",
    date: "2023-04-03",
    total: 2499.0,
    status: "shipped",
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "Sarah Davis",
    email: "sarah.davis@example.com",
    date: "2023-04-04",
    total: 699.0,
    status: "pending",
    items: 4,
  },
  {
    id: "ORD-005",
    customer: "Michael Brown",
    email: "michael.brown@example.com",
    date: "2023-04-05",
    total: 4999.0,
    status: "delivered",
    items: 2,
  },
]

export function OrdersTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = orders.filter(
    (order) =>
      (order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === "all" || order.status === statusFilter),
  )

  const handleUpdateStatus = (id: string, status: string) => {
    toast("Order status updated", {
      description: `Order ${id} status has been updated to ${status}.`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search orders..."
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
        <TableHead>
        <TableRow>
          <TableHeader>Order ID</TableHeader>
          <TableHeader>Customer</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Items</TableHeader>
          <TableHeader align="right">Actions</TableHeader>
        </TableRow>
      </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p>{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.email}</p>
                  </div>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>₹{order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "delivered"
                        ? "default"
                        : order.status === "shipped"
                          ? "secondary"
                          : order.status === "processing"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href={`/seller/orders/${order.id}`} className="flex items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleUpdateStatus(order.id, "processing")}>
                        Mark as Processing
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(order.id, "shipped")}>
                        Mark as Shipped
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(order.id, "delivered")}>
                        Mark as Delivered
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

