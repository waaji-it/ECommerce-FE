import Link from "next/link"
import type { Metadata } from "next"

import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Login | Nagore Shopping",
  description: "Login to your Nagore Shopping account",
}

export default function LoginPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your email and password to sign in to your account</p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

