"use client";

import type React from "react";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/organisms/button";
import { Input } from "@/components/ui/organisms/input";
import { Label } from "@/components/ui/organisms/label";
import { useAuthStore } from "@/store/authStore";

export default function ConfirmDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const { getSingleUser, user } = useAuthStore();

  useEffect(() => {
    getSingleUser(email);
  }, []);

  console.log(user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/set-password?email=${encodeURIComponent(email)}`);
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
          <h1 className="text-2xl font-medium mb-2">Confirm Your Details</h1>
          <p className="text-gray-600 mb-6">
            Almost there! Check your details and continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={user?.firstname}
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={user?.lastname}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user?.email} readOnly />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md mt-4"
            >
              Continue
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
  );
}
