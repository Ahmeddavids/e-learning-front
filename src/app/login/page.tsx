"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/organisms/button"
import { Input } from "@/components/ui/organisms/input"
import { Label } from "@/components/ui/organisms/label"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function Login() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const resetSuccess = searchParams.get("reset") === "success"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    if (resetSuccess) {
      setSuccessMessage("Your password has been reset successfully. You can now log in with your new password.")
    }
  }, [resetSuccess])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccessMessage("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Logging in with:", { email, password })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      router.push("/dashboard")
    } catch (err) {
      console.error("Login error:", err)
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
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
          <h1 className="text-2xl font-medium mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Your next lesson is just one click away!</p>

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-4">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full p-3 border rounded-md"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full p-3 border rounded-md pr-10"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-4 text-sm text-center">
            Did you forget your password?{" "}
            <Link href="/reset-password" className="text-orange-500 hover:text-orange-600 font-medium">
              Reset it now
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-orange-500 hover:text-orange-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
