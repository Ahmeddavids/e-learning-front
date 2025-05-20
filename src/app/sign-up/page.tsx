"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignUp() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Sending verification code to:", email)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      router.push(`/verify-email?email=${encodeURIComponent(email)}`)
    } catch (err) {
      console.error("Error sending verification code:", err)
      setError("Failed to send verification code. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="mb-8">
          <Link href="/">
            <Image src="/logo.png" alt="The Curve Logo" width={120} height={50} className="h-auto" />
          </Link>
        </div>

        <div className="w-full text-center mb-8">
          <h1 className="text-2xl font-medium mb-2">Welcome to The Curve Africa</h1>
          <p className="text-gray-600 mb-6">Input your email to proceed to your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              required
              className="w-full p-3 border rounded-md"
              disabled={isSubmitting}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue"}
            </Button>
          </form>
        </div>

        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-orange-500">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
