"use client";
import SelectComponent from "@/components/ui/organisms/leaderboard/select-comp";
import ToggleSwitch from "@/components/ui/organisms/leaderboard/toggle-switch";
import LeaderProfile from "@/components/ui/organisms/leaderboard/leader-profile";
// import LeaderProfile from "@/components/LeaderProfile";
// import Image from "next/image";
import {useState} from "react";
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
    const sampleData = {
        name: "Justine Agbabiaka-Ayoola",
        position: 1,
        id: "user_123",
        xp: "700",
    };
    return (
        <div className="w-full h-[200vh] px-2 sm:px-4 ">
            <div className="w-full h-max flex flex-col gap-2">
                <h2 className="font-semibold text-lg text-[#2D2F30]">
                    Leaderboard
                </h2>
                <p className="text-sm text-[#525454] font-light">
                    Here you can view how students rank in each learning track.
                </p>
            </div>
            <div className="w-full h-max flex justify-between mt-8">
                <SelectComponent stack={stack} />

                <ToggleSwitch value={viewMode} onChange={setViewMode} />
            </div>
            <div className="w-full h-max py-10 mt-6 sm:mt-14 flex items-center justify-center gap-8 sm:gap-20">
                <LeaderProfile position={2} />
                <LeaderProfile position={1} />
                <LeaderProfile position={3} />
            </div>
            <div className="w-full h-80 border-t border-t-gray-100 mt-6 py-2">
                {Array.from({length: 10}).map((_, index) => (
                    <LeaderList data={sampleData} key={index} />
                ))}
            </div>
        </div>
    );
}
