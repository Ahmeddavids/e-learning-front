"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ConfirmDetails() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter both first and last name")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Saving user details:", { firstName, lastName, email })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      router.push(
        `/set-password?email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`,
      )
    } catch (err) {
      console.error("Error saving user details:", err)
      setError("Failed to save your details. Please try again.")
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
          <h1 className="text-2xl font-medium mb-2">Confirm Your Details</h1>
          <p className="text-gray-600 mb-6">Almost there! Check your details and continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  className="w-full p-3 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full p-3 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                readOnly
                className="w-full p-3 border rounded-md bg-gray-50"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Confirm & Continue"}
            </Button>
          </form>
        </div>

        <div className="text-sm text-gray-500">
          Not your details?{" "}
          <Link href="/help" className="text-orange-500 hover:text-orange-600">
            Get help
          </Link>
        </div>
      </div>
    </div>
  )
}
