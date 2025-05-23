import React from "react";
import { ProgressCard } from "./progress-card";
import { TopPerformers } from "./top-performer";

export const RightPanel = () => {
  return (
    <div className="lg:w-72 flex flex-col lg:mt-0 mt-12 gap-y-12 ">
      <ProgressCard />
      <TopPerformers />
    </div>
  );
};
