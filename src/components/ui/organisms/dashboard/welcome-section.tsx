import React from "react";
import { Button } from "../button";

export const WelcomeSection = () => {
  return (
    <div className="mb-12">
      <div className="bg-[#F9F9F9] p-6 rounded-md ">
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-500">Week 1</span>
        </div>
        <h2 className="text-2xl font-bold text-[#2D2F30] mb-3">
          Introduction to Product Design
        </h2>
        <p className="text-gray-600 mb-6">The role of a product designer</p>

        <Button
          variant="outline"
          className="bg-[#FB8500] text-white hover:bg-orange-50 px-8 py-2 rounded w-1/3"
        >
          Start Lesson
        </Button>
      </div>
    </div>
  );
};
