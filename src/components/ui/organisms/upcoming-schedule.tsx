import React from "react";

const scheduleItems = [
  {
    time: "10:00 AM",
    date: "Today",
    title: "History of HTML",
    type: "Live Class",
  },
  {
    time: "10:00 AM",
    date: "20/04/25",
    title: "Understanding the path to Development",
    type: "Group Session",
  },
];

export const UpcomingSchedule = () => {
  return (
    <div className="bg-[#F9F9F9] p-6 rounded-md ">
      <h2 className="text-2xl font-medium -900 mb-6 text-[#2D2F30]">
        Upcoming Schedule
      </h2>

      <div className="space-y-4">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex">
                <div className="mr-6">
                  <div className="text-lg font-normal text-[#2D2F30]">
                    {item.time}
                  </div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#2D2F30] mb-1">
                    {item.title}
                  </h3>
                  <span className="text-[#7A7B7C] font-light text-sm">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
