import React from "react";
import { WelcomeSection } from "./welcome-section";
import { UpcomingSchedule } from "./upcoming-schedule";


export const MainContent = () => {
  return (
    <div className="flex-1">
      <WelcomeSection />
      <UpcomingSchedule />
    </div>
  );
};
