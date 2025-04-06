import type { Product } from "./types"

// Mock data for products
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    price: 1999.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 50,
    details: [
      "Active noise cancellation",
      "Up to 24 hours of battery life",
      "Sweat and water resistant",
      "Touch controls",
      "Voice assistant compatible",
    ],
  },
  {
    id: "2",
    name: "Smart Fitness Tracker",
    description: "Track your fitness goals with this advanced smart fitness tracker.",
    price: 2499.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Wearables",
    stock: 30,
    details: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Water resistant up to 50m",
      "7-day battery life",
      "Compatible with iOS and Android",
    ],
  },
  {
    id: "3",
    name: "Portable Bluetooth Speaker",
    description: "Powerful portable speaker with rich sound and deep bass.",
    price: 1499.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 45,
    details: [
      "360° sound",
      "12 hours of playtime",
      "Waterproof design",
      "Built-in microphone for calls",
      "Compact and portable",
    ],
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic chair for your home office or workspace.",
    price: 7999.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Furniture",
    stock: 15,
    details: [
      "Adjustable height and armrests",
      "Lumbar support",
      "Breathable mesh back",
      "360° swivel",
      "Durable construction",
    ],
  },
  {
    id: "5",
    name: "Smart Home Security Camera",
    description: "Keep your home safe with this smart security camera with motion detection.",
    price: 3499.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Smart Home",
    stock: 25,
    details: ["1080p HD video", "Night vision", "Two-way audio", "Motion detection alerts", "Cloud storage option"],
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    description: "Eco-friendly insulated water bottle that keeps drinks hot or cold for hours.",
    price: 699.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Kitchen",
    stock: 100,
    details: [
      "Double-wall insulation",
      "Keeps drinks cold for 24 hours",
      "Keeps drinks hot for 12 hours",
      "BPA-free",
      "Leak-proof design",
    ],
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 1299.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 60,
    details: [
      "15W fast charging",
      "Compatible with all Qi-enabled devices",
      "Slim and compact design",
      "LED charging indicator",
      "Overcharge protection",
    ],
  },
  {
    id: "8",
    name: "Premium Yoga Mat",
    description: "High-quality non-slip yoga mat for all types of yoga and exercises.",
    price: 1499.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fitness",
    stock: 40,
    details: [
      "6mm thickness for comfort",
      "Non-slip surface",
      "Eco-friendly material",
      "Easy to clean",
      "Includes carrying strap",
    ],
  },
]

// Function to get all products
export function getProducts(): Product[] {
  return products
}

// Function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3)
}

// Function to get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

