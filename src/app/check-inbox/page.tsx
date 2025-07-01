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

export default function CheckInbox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";

  const { checkInbox, forgotpassword, isLoading } = useAuthStore();

  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();

    if (verificationCode.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    try {
      const reset_code = verificationCode;

      await checkInbox(email, reset_code);
      toast.success("Sucessful");

      router.push(`/reset-password/new?email=${encodeURIComponent(email)}`);
    } catch (error) {
      const err = error as ApiError;
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Signup failed. Please try again.";

      toast.error(errorMessage);
    }
  };

  const handleResendCode = async () => {
    try {
      await forgotpassword(email);
      toast.success("Verification code resent successfully");
    } catch (error) {
      const err = error as ApiError;
      const errorMessage = err.response?.data?.message || err.message;

      toast.error(errorMessage);
    }
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
            />
          </Link>
        </div>

        <div className="w-full text-center mb-8">
          <h1 className="text-2xl font-medium mb-2">Check your inbox!</h1>
          <p className="text-gray-600 mb-1">
            Enter the 6-digit code we just sent to {email}.
          </p>
          <p className="text-gray-600 mb-6">
            Didn&apos;t get it? Check your spam or{" "}
            <button
              onClick={handleResendCode}
              className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
            >
              {isLoading ? "resending..." : "resend code"}
            </button>
          </p>

          <form onSubmit={handleContinue} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your 6-digit Code"
              value={verificationCode}
              onChange={(e) => {
                setVerificationCode(
                  e.target.value.replace(/[^0-9]/g, "").slice(0, 6)
                );
                setError("");
              }}
              className="w-full p-3 border rounded-md"
              maxLength={6}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={!verificationCode}
            >
              {isLoading ? "Verifying..." : "Continue"}
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
  );
}
