import React from "react";
import { Anvil, ArrowRight } from "lucide-react";

export const ProgressCard = () => {
  return (
    <div className="bg-[#F9F9F9] rounded-md p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium text-[#282929]">Your progress</h3>
        <ArrowRight className="w-4 h-4 text-gray-700" />
      </div>

      <span className="text-[10px] font-medium text-gray-500 rounded-md bg-[#EAEAEA] p-1">
        Week 1
      </span>

      <div className="my-4">
        <div className="text-sm font-normal text-[#7A7B7C] mb-1 text-right">
          50/1000px
        </div>
        <div className="w-full bg-[#FFE8D7] rounded-full h-2">
          <div
            className="bg-[#FB8500] h-2 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-600">
        <Anvil className="w-4 h-4 mr-2" />
        <span className="text-sm font-light">2 badges</span>
      </div>

      <p className="text-sm text-justify text-[#2D2F30] font-light">
        You&apos;re ranked 10th this week! Keep learning to climb higher!
      </p>
    </div>
  );
};
