"use client";

import { Button } from "@/components/ui/organisms/button";
import { Card, CardHeader } from "@/components/ui/organisms/card";
import { learningPath } from "@/util";
import Image from "next/image";
import React, { useState } from "react";

const LearningPath = () => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? learningPath : learningPath.slice(0, 6);

  return (
    <div>
      <section className="space-y-2 mb-6  ">
        <h1 className="font-bold text-2xl">Learning Path</h1>
        <p className="font-normal text-gray-600 text-base">
          Your structured journey to mastering your tech track
        </p>
      </section>
      <div className="bg-[#F9F9F9] rounded-lg w-full h-40 flex  p-6  justify-between">
        <div className="flex space-y-2 flex-col">
          <h2 className="font-bold text-xl">Product Design</h2>
          <span className="text-gray-600 text-sm">
            Welcome to this certificate program, this program will fast track
            your career in becoming a product designer.
          </span>
          <div className="flex items-center space-x-4 lg:mt-8">
            <div className="w-44 bg-[#FFE8D7] rounded-full h-2 flex items-center space-x-4">
              <div
                className="bg-[#FB8500] h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-sm">30% Complete</p>
          </div>
        </div>

        <div>
          <Image
            src="/Frame.svg"
            alt="Product Design"
            width={100}
            height={100}
          />
        </div>
      </div>


      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center ">
        {displayData.map((path, idx) => (
          <Card key={idx} className="w-[360px] h-40 ">
            <CardHeader className="p-3">
              <div className="flex justify-between w-full">
                <h3 className=" text-xs text-[#7A7B7C]">{path.week}</h3>
                <p className=" text-xs text-[#7A7B7C]">
                  {path.completed && "Completed"}
                </p>
              </div>
              <p className="text-sm font-medium border-b border-b-black/10 pb-2">
                {path.title}
              </p>
              <p className="text-sm text-[#7A7B7C] tracking-wide  overflow-hidden break-words line-clamp-4">
                {path.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
      {learningPath.length >= 6 && (
        <div className="w-full flex justify-center items-center mt-6">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="bg-[#FFE8D7] text-[#FB8500] hover:bg-orange-50 py-4 rounded-sm w-40 "
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default LearningPath;
