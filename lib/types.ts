export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    stock: number
    details?: string[]
  }
  
  export interface CartItem extends Product {
    quantity: number
  }
  
  export interface Order {
    id: string
    customer: string
    email: string
    date: string
    total: number
    status: "pending" | "processing" | "shipped" | "delivered"
    items: CartItem[]
  }
  
  export interface User {
    id: string
    name: string
    email: string
    role: "customer" | "seller"
  }
  
  