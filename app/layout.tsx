import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nagore Shopping - Your One-Stop Shop",
  description: "Find everything you need at Nagore Shopping, your one-stop e-commerce destination",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

