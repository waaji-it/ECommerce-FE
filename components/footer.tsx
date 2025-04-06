import Link from "next/link"
import { Facebook, Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Nagore Shopping</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for all your needs. Quality products at affordable prices.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-foreground">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-muted-foreground hover:text-foreground">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:abdul.wajid.it@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:9003967742" className="text-muted-foreground hover:text-foreground">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Nagore Shopping. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

