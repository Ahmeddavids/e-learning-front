import { Camera } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import { badges } from "@/util";
import { useState } from "react";

export default function Profile() {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? badges : badges.slice(0, 4);

  return (
    <>
      <div className="flex gap-10 items-center">
        <div className="relative w-24 h-24">
          <Image
            width={50}
            height={50}
            src="/icons/profile.svg"
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover border"
          />
          <div className="absolute -bottom-1 -right-2 bg-[#003F5E] rounded-full p-2">
            <Camera className="text-white text-sm" />
          </div>
        </div>
        <span className="flex flex-col">
          <h3 className="text-2xl font-bold ">Benson Ade</h3>
          <p className="text-gray-500 text-sm">Frontend Development</p>
        </span>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mt-6">
        <div className=" flex justify-between items-center mb-4">
          <h4 className="font-semibold mb-2">Achievements</h4>
          <p
            className="text-[#FB8500] cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View All"}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {displayData.map((badge) => (
            <Image
              key={badge.id}
              width={badge.width}
              height={badge.height}
              src={badge.src}
              alt={badge.alt}
              className="w-24 h-24"
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg mt-4 p-4 space-y-3">
        <div className=" flex justify-between items-center">
          <h4 className="font-semibold">About me</h4>
          <button className="text-orange-500 text-sm font-medium">Edit</button>
        </div>
        <textarea
          className="py-4 w-full p-2 border-1"
          value="I am a skilled and detail-oriented frontend developer passionate about
          creating clean, user-friendly interfaces."
          readOnly
        ></textarea>
        <div className="flex w-full gap-4 justify-end ">
          <Button
            type="submit"
            className="w-1/4 bg-[#FFE8D7] hover:bg-[#FB8500] text-[#FB8500] hover:text-white p-3 rounded-md"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-1/4 bg-[#FB8500] hover:bg-[#fcd1b3] hover:text-[#FB8500] text-white p-3 rounded-md"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
