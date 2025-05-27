import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const performers = [
  {
    name: "Jane Ivan",
    role: "Product Design",
    avatar: "/tesdt.png",
  },
  {
    name: "Mark Thompson",
    role: "Frontend",
     avatar: "/tesdt.png",
  },
  {
    name: "Sarah Lee",
    role: "Backend",
    avatar: "/tesdt.png",
  },
];

export const TopPerformers = () => {
  return (
    <div className="bg-[#F9F9F9] rounded-md p-6">
      <div className="flex items-center justify-between ">
        <h3 className="text-base font-normal text-[#2D2F30]">Top Performers</h3>
        <ArrowRight className="w-4 h-4 text-gray-700" />
      </div>

      <span className="text-[10px] font-medium text-gray-500 rounded-md bg-[#EAEAEA] p-1">
        Week 1
      </span>

      <div className="space-y-2 mt-3">
        {performers.map((performer, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-medium text-sm text-gray-900">
                  {performer.name}
                </div>
                <div className="text-xs text-gray-500">{performer.role}</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};
