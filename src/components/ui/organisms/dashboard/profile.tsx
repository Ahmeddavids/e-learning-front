import { Camera } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

export default function Profile() {
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
        <h4 className="font-semibold mb-2">Achievements</h4>
        <div className="flex gap-4">
          <Image
            width={50}
            height={50}
            src="/icons/badge.svg"
            alt="Top 3"
            className="w-12 h-12"
          />
          <Image
            width={50}
            height={50}
            src="/icons/frame.svg"
            alt="Quiz Master"
            className="w-12 h-12"
          />
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
            className="w-1/4 bg-[#FB8500] hover:bg-[#fcd1b3] hover:text-[#FB8500] text-white p-3 rounded-md"
          >
            Save
          </Button>
          <Button
            type="submit"
            className="w-1/4 bg-[#FFE8D7] hover:bg-[#FB8500] text-[#FB8500] hover:text-white p-3 rounded-md"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
