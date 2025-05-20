"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/organisms/button"
import { Input } from "@/components/ui/organisms/input"

export default function CheckInbox() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || "your email"
  const mode = searchParams.get("mode") || "verify" // verify or reset

  const [verificationCode, setVerificationCode] = useState("")
  const [isResending, setIsResending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState("")

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()

    if (verificationCode.length !== 6) {
      setError("Please enter a valid 6-digit code")
      return
    }

    setIsVerifying(true)
    setError("")

    try {
      console.log("Verifying code:", verificationCode)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (mode === "reset") {
        router.push(`/reset-password/new?token=${verificationCode}`)
      } else {
        router.push(`/confirm-details?email=${encodeURIComponent(email)}`)
      }
    } catch (err) {
      console.error("Error verifying code:", err)
      setError("Failed to verify code. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    setError("")

    console.log("Resending code to:", email)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsResending(false)
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
          <h1 className="text-2xl font-medium mb-2">Check your inbox!</h1>
          <p className="text-gray-600 mb-1">Enter the 6-digit code we just sent to {email}.</p>
          <p className="text-gray-600 mb-6">
            Didn't get it? Check your spam or{" "}
            <button
              onClick={handleResendCode}
              disabled={isResending}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              {isResending ? "resending..." : "resend code"}
            </button>
          </p>

          <form onSubmit={handleContinue} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your 6-digit Code"
              value={verificationCode}
              onChange={(e) => {
                setVerificationCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))
                setError("")
              }}
              className="w-full p-3 border rounded-md"
              maxLength={6}
              disabled={isVerifying}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Continue"}
            </Button>
          </form>
        </div>

        <div className="text-sm text-gray-500">
          Remembered your password?{" "}
          <Link href="/login" className="text-orange-500 hover:text-orange-600">
            Login here
          </Link>
        </div>
      </div>
    </div>
  )
}
