import Image from "next/image";
import React from "react";

const LiveClass = () => {
  return (
    <div className="w-full bg-[#F9F9F9] mt-4 rounded-2xl flex flex-col lg:flex-row p-4 gap-6">
      <div className="w-full lg:w-1/3 bg-white rounded-lg p-4 flex flex-col">
        <div className="flex justify-end mb-2">
          <p className="text-white bg-red-600 text-sm sm:text-base rounded-md px-3 py-1">
            Live
          </p>
        </div>
        <div className="flex justify-center items-center h-full">
          <Image
            width={400}
            height={300}
            src="/icons/FrameImg.png"
            alt="Live Class Thumbnail"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex items-center">
        <article className="w-full space-y-4">
          <h2 className="text-[#2D2F30] text-xl sm:text-2xl font-semibold">
            Introduction To Product Design
          </h2>
          <p className="text-[#525454] text-base sm:text-lg">
            This course is an essential introduction to product design for
            professionals across various fields. Learn key UI/UX, graphic
            design, and marketing terms to improve collaboration with designers,
            developers, marketing team, and stakeholders.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#A4A5A6] text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#525454]"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5S10.619 6.5 12 6.5s2.5 1.119 2.5 2.5S13.381 11.5 12 11.5z" />
                </svg>
                <span>Google Meets</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-600"
                >
                  <path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.263 10.263 0 0 0 12 1.75zm0 18.5A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25zm.25-13.5h-1.5v5.25L16 15.5l.75-1.25-4.5-2.75z" />
                </svg>
                <span>10am - 12pm</span>
              </div>
            </div>

            <button className="bg-[#FB8500] w-full text-white py-2 px-4 rounded-md hover:bg-[#e07a00] transition duration-200">
              Join Now
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LiveClass;
