"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/organisms/button";
import { Input } from "@/components/ui/organisms/input";
import { Label } from "@/components/ui/organisms/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { ApiError } from "@/types/api_error";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "@/validation/auth/resetPassword";

export default function NewPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ new_password: string; confirm_password: string }>({
    resolver: yupResolver(schema),
  });

  const { resetPassword, isLoading } = useAuthStore();

  const onSubmit = async (data: {
    new_password: string;
    confirm_password: string;
  }) => {
    try {
      await resetPassword(email, data.new_password, data.confirm_password);
      toast.success("Password Reset Sucessfully");
      router.push("/loading-screen");
    } catch (error) {
      const err = error as ApiError;
      const errorMessage = err.response?.data?.message || err.message;

      toast.error(errorMessage);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <h1 className="text-2xl font-medium mb-2">Create New Password</h1>
          <p className="text-gray-600 mb-6">
            Enter a new password for your account
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-left"
          >
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Input
                  id="new_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full p-3 border rounded-md pr-10"
                  {...register("new_password")}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full p-3 border rounded-md"
                {...register("confirm_password")}
              />
            </div>
            {errors.confirm_password && (
              <p className="text-red-500 text-sm">
                {errors.confirm_password.message as string}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={
                isLoading ||
                !watch("new_password") ||
                !watch("confirm_password")
              }
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </div>

        <div className="text-sm text-gray-500">
          <Link href="/login" className="hover:text-orange-500">
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
