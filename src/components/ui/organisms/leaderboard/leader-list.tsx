"use client";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/organisms/popover";

import Image from "next/image";

type LeaderData = {
    name: string;
    position: number;
    id: string;
    xp: string;
};

type LeaderListProps = {
    data: LeaderData;
};

export default function LeaderList({data}: LeaderListProps) {
    const getInitials = (name: string) => {
        const names = name.trim().split(" ");
        if (names.length === 1) return names[0][0];
        return names[0][0] + names[names.length - 1][0];
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="w-full h-max py-4 sm:px-4 px-0 flex justify-between items-center cursor-pointer hover:bg-[#EAEAEA] rounded-sm transition-all duration-300">
                    <div className="w-max h-max flex items-center gap-3">
                        <p>{data.position}</p>
                        <span className="w-10 h-10 rounded-full bg-[#43B097] text-sm flex items-center text-white justify-center uppercase">
                            {getInitials(data.name)}
                        </span>
                        <p className="text-[#2D2F30] text-sm sm:text-base truncate w-40" title={data.name}>{data.name}</p>
                    </div>
                    <p className="text-xl font-light text-[#7A7B7C]">
                        {data.xp} XP
                    </p>
                </div>
            </PopoverTrigger>

            <PopoverContent className="w-max h-max p-4 rounded-lg shadow-lg">
                <div className="sm:w-[28rem] w-[20rem] h-max flex flex-col gap-3">
                    <div className="w-full h-max flex gap-4 items-center text-center space-y-1">
                        <Image
                            src="/leaderpfp.png"
                            alt={data.name}
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <div className="w-[14rem] sm:w-full h-max flex flex-col gap-2">
                            <div className="w-full h-max flex flex-col items-start">
                                <h2 className="w-full sm:text-xl text-lg font-bold flex truncate">
                                    {data.name} she 
                                </h2>
                                <p className="text-sm text-muted-foreground font-light">
                                    Product Designer
                                </p>
                            </div>
                            <div className="w-full h-max bg-[#F4F4F4] rounded-md flex sm:flex-row flex-col gap-2 justify-around py-2 text-sm font-medium text-gray-800 p-1">
                                <div className="flex sm:flex-col flex-row sm:gap-2 gap-8 items-center text-center sm:justify-center justify-start ">
                                    <div className="w-max h-max flex gap-1 text-[#7A7B7C]">
                                        <span className="text-orange-500">
                                            ⚡
                                        </span>
                                        <p>Total XP</p>
                                    </div>
                                    <p className="text-center text-lg">
                                        {data.xp}
                                    </p>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-2 gap-8 items-center text-center sm:justify-center justify-start ">
                                    <div className="w-max h-max flex gap-1 text-[#7A7B7C]">
                                        <span className="text-orange-500">
                                            📍
                                        </span>
                                        <p>Top 3 finishes</p>
                                    </div>

                                    <p className="text-center text-lg">
                                        0
                                    </p>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-2 gap-8 items-center text-center sm:justify-center justify-start ">
                                    <div className="w-max h-max flex gap-1 text-[#7A7B7C]">
                                        <span className="text-orange-500">
                                            ⭐
                                        </span>
                                        <p>Achievements</p>
                                    </div>

                                    <p className="text-center text-lg">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-full bg-[#F9F9F9] p-3 rounded-md">
                        <h3 className="font-semibold mb-1">About me</h3>
                        <p className="text-sm text-[#2D2F30] font-light">
                            I am an aspiring product designer, passionate about
                            crafting intuitive, impactful, and user-centric
                            digital experiences.
                        </p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
