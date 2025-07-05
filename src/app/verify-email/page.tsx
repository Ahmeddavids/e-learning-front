"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/organisms/button";
import { Input } from "@/components/ui/organisms/input";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { ApiError } from "@/types/api_error";

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const displayEmail = email || "your email";

  const [verification_token, setVerificationCode] = useState("");
  const { verifyEmail, resendVerification, isLoading, error } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (verification_token.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    if (error) {
      toast.error(error);
    }

    await verifyEmail(verification_token, email);
    toast.success("Email verified successfully");
    router.push(`/confirm-details?email=${encodeURIComponent(email)}`);
  };

  const handleResendCode = async () => {
    try {
      await resendVerification(email);
      toast.success("Verification code resent successfully");
    } catch (error) {
      const err = error as ApiError;
      const errorMessage = err.response?.data?.message || err.message;

      toast.error(errorMessage);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="The Curve Logo"
              width={120}
              height={50}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        <div className="w-full text-center mb-8">
          <h1 className="text-2xl font-medium mb-2">Verify Your Email</h1>
          <p className="text-gray-600 mb-1">
            Enter the 6-digit code we just sent to {displayEmail}.
          </p>
          <p className="text-gray-600 mb-6">
            Didn&apos;t get it? Check your spam or{" "}
            <button
              onClick={handleResendCode}
              className="text-orange-500 hover:text-orange-600 font-medium disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Resending..." : "Resend code"}
            </button>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter the 6-digit code"
              value={verification_token}
              onChange={handleCodeChange}
              className="w-full p-3 border rounded-md text-center tracking-widest"
              maxLength={6}
              disabled={isLoading}
              autoFocus
            />

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md disabled:opacity-50"
              disabled={isLoading || verification_token.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </div>

        <div className="text-sm text-gray-500">
          <Link href="/sign-up" className="hover:text-orange-500">
            ← Back to sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
