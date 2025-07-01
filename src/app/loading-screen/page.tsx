"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function LoadingScreen() {
  const router = useRouter()
  const [loadingText, setLoadingText] = useState("Loading your awesomeness")
  const [dots, setDots] = useState("")

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    const messages = ["Loading your awesomeness", "Setting up your account", "Preparing your dashboard", "Almost there"]

    let messageIndex = 0
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length
      setLoadingText(messages[messageIndex])
    }, 2000)

    const redirectTimeout = setTimeout(() => {
      router.push("/login")
    }, 6000)

    return () => {
      clearInterval(dotsInterval)
      clearInterval(messageInterval)
      clearTimeout(redirectTimeout)
    }
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="animate-spin-slow mb-6">
          <Image src="/loader.png" alt="The Curve Logo" width={80} height={80} />
        </div>

        <p className="text-gray-600 mt-4">
          {loadingText}
          {dots}
        </p>
      </div>
    </div>
  )
}
