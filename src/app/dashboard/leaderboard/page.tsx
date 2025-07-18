"use client";
import SelectComponent from "@/components/ui/organisms/leaderboard/select-comp";
import ToggleSwitch from "@/components/ui/organisms/leaderboard/toggle-switch";
import LeaderProfile from "@/components/ui/organisms/leaderboard/leader-profile";
import { useState } from "react";
import LeaderList from "@/components/ui/organisms/leaderboard/leader-list";

export default function Page() {
  const stack = [
    {
      name: "Frontend",
      id: 1,
    },
    {
      name: "Backend",
      id: 2,
    },
    {
      name: "Product Design",
      id: 3,
    },
  ];
  const [viewMode, setViewMode] = useState<"weekly" | "all-time">("weekly");

  const sampleLeaderData = Array.from({ length: 25 }, (_, index) => ({
    name: `John Ivan ${index + 4}`,
    position: index + 4,
    id: `user_${index + 4}`,
    xp: `${700 - index * 20}`,
  }));

  return (
    <div className="w-full px-2 sm:px-4 flex flex-col">
      <div className="w-full h-max flex flex-col gap-2">
        <h2 className="font-semibold text-lg text-[#2D2F30]">Leaderboard</h2>
        <p className="text-sm text-[#525454] font-light">
          Here you can view how students rank in each learning track.
        </p>
      </div>
      <div className="w-full h-max flex justify-between mt-4 ">
        <SelectComponent stack={stack} />

        <ToggleSwitch value={viewMode} onChange={setViewMode} />
      </div>
      <div className="w-full h-72 py-4 mt-2 flex items-center justify-center gap-8 sm:gap-20">
        <LeaderProfile position={2} />
        <LeaderProfile position={1} />
        <LeaderProfile position={3} />
      </div>
      <div className="w-full flex-1 border-t border-t-gray-100 mt-6 py-2">
        <LeaderList data={sampleLeaderData} />
      </div>
    </div>
  );
}
