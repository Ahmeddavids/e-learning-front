"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/organisms/button";
import { Input } from "@/components/ui/organisms/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/validation/auth/register";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { ApiError } from "@/types/api_error";

export default function SignUp() {
  const router = useRouter();
  const { signup, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
  });
  const email = watch("email", "");

  const onSubmit = async (data: { email: string }) => {
    try {
      await signup(data.email);
      toast.success(
        "Welcome! Please verify your account; an email has been sent."
      );
      router.push(`/verify-email?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      const err = error as ApiError;
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Signup failed. Please try again.";

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
          <h1 className="text-2xl font-medium mb-2">
            Welcome to The Curve Africa
          </h1>
          <p className="text-gray-600 mb-6">
            Input your email to proceed to your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              {...register("email")}
              required
              className="w-full p-3 border rounded-md"
            />

            <p className="text-red-500 font-semibold text-xs">
              {errors.email?.message}
            </p>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={isLoading || !email}
            >
              {isLoading ? "Processing..." : "Continue"}
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
  );
}
