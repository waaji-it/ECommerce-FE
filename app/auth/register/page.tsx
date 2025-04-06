import Link from "next/link"
import type { Metadata } from "next"

import RegisterForm from "@/components/register-form"

export const metadata: Metadata = {
  title: "Register | Nagore Shopping",
  description: "Create a new Nagore Shopping account",
}

export default function RegisterPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline underline-offset-4 hover:text-primary">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

