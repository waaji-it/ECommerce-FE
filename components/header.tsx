"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

export default function Header() {
  const pathname = usePathname()
  const { items } = useCart()
  const cartItemCount = items.length

  const isSellerPage = pathname.startsWith("/seller")

  const navigation = isSellerPage
    ? [
        { name: "Dashboard", href: "/seller" },
        { name: "Products", href: "/seller/products" },
        { name: "Orders", href: "/seller/orders" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Categories", href: "/categories" },
      ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={isSellerPage ? "/seller" : "/"} className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">{isSellerPage ? "Nagore Shopping Seller" : "Nagore Shopping"}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? "text-foreground font-semibold"
                    : "text-foreground/60 transition-colors hover:text-foreground"
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href={isSellerPage ? "/seller" : "/"} className="flex items-center">
              <span className="font-bold text-xl">{isSellerPage ? "Nagore Shopping Seller" : "Nagore Shopping"}</span>
            </Link>
            <div className="my-4 w-full">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "text-foreground font-semibold"
                        : "text-foreground/60 transition-colors hover:text-foreground"
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href={isSellerPage ? "/seller" : "/"} className="mr-6 flex items-center space-x-2 md:hidden">
              <span className="font-bold text-xl">{isSellerPage ? "Nagore Shopping Seller" : "Nagore Shopping"}</span>
            </Link>
          </div>
          {!isSellerPage && (
            <>
              <Link href="/cart">
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/account">
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>
            </>
          )}
          {isSellerPage && (
            <Link href="/seller/account">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

