"use client";
import { Button } from "@/components/ui/organisms/button";
import { toast } from "react-hot-toast";

const handleJoinCommunity = () => {
  toast.success("You have joined the community!");
};

export default function community() {
  return (
    <div className="flex flex-col gap-4 items-center w-full h-screen pt-8">
      <div className="w-full h-max md:w-7/12 flex flex-col gap-4">
        <h2 className="font-bold md:text-3xl text-base text-[#2D2F30] text-center">
          Join Our Vibrant Community!
        </h2>
        <p className="md:text-base text-sm text-[#2D2F30] font-normal">
          Connect with your fellow curvites, learn from industry experts, and
          collaborate on exciting projects. Our community is the perfect place
          to grow your skills and network.
        </p>
      </div>
      <Button
        onClick={handleJoinCommunity}
        variant="outline"
        className="bg-[#FB8500] text-white hover:bg-orange-50 px-8 py-4 rounded md:w-1/3 w-full"
      >
        Join the Community
      </Button>
    </div>
  );
}
