import React from "react";
import { Button } from "../button";
import { Clock4, MapPin } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <div className="mb-12">
      <div className="bg-[#F9F9F9] p-6 rounded-md space-y-4">
        <h2 className="text-2xl font-bold text-[#2D2F30] ">
          Introduction to Product Design{" "}
        </h2>
        <div className="flex items-center gap-4 text-gray-500 ">
          <MapPin /> <span>Google Meet</span>
          <Clock4 /> <span>10:00 AM</span>
        </div>

        <Button
          variant="outline"
          className="bg-[#FB8500] text-white hover:bg-orange-50  py-6 rounded w-1/3"
        >
          Join Class
        </Button>
      </div>
    </div>
  );
};
