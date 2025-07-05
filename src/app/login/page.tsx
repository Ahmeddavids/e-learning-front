"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/organisms/button";
import { Input } from "@/components/ui/organisms/input";
import { Label } from "@/components/ui/organisms/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { schema } from "@/validation/auth/login";
import { ApiError } from "@/types/api_error";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ password: string; email: string }>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await login(data.email, data.password);
      toast.success("Logged In Sucessfully");
      router.push("/dashboard");
    } catch (error) {
      const err = error as ApiError;
      const errorMessage = err.response?.data?.message || err.message;

      toast.error(errorMessage);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
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
          <h1 className="text-2xl font-medium mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-6">
            Your next lesson is just one click away!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-left"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full p-3 border rounded-md"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full p-3 border rounded-md pr-10"
                  {...register("password")}
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
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md"
              disabled={isLoading || !watch("password") || !watch("email")}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-4 text-sm text-center">
            Did you forget your password?{" "}
            <Link
              href="/reset-password"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Reset it now
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-orange-500 hover:text-orange-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
