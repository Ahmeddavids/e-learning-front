import { ChevronLeft, ChevronRight } from "lucide-react";
import CalendarHeader from "./calendar-header";
import EventCard from "./event-card";
import { useCalendarWeek } from "@/hooks/useCalendarWeek";
import { getEventsForDay } from "@/util";

const Calendar = () => {
  const { days, weekLabel, navigateWeek } = useCalendarWeek();

  return (
    <div className="max-w-7xl mx-auto h-[85vh]">
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-8">
        <CalendarHeader />

        <div className="flex items-center justify-center mb-6 sm:mb-8 mt-6 sm:mt-8">
          <button
            onClick={() => navigateWeek("prev")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="mx-6 sm:mx-8 text-base sm:text-lg font-medium text-gray-700">
            {weekLabel}
          </div>

          <button
            onClick={() => navigateWeek("next")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 ">
          {days.map((day) => (
            <div
              key={day.number}
              className="min-h-[120px] sm:min-h-[400px] p-2 border-l border-gray-200 "
            >
              <div className="mb-3 sm:mb-4 border-b border-gray-200">
                <div
                  className={`
                  inline-flex  items-center justify-center w-12 sm:w-16 h-6 sm:h-8 rounded-lg text-xs sm:text-sm font-medium
                  ${day.isToday ? "bg-slate-700 text-white" : "text-gray-700"}
                `}
                >
                  <span className="block sm:hidden">
                    {day.name.slice(0, 3)}
                  </span>
                  <span className="hidden sm:block">{day.name}</span>
                  <span className="ml-1">{day.number}</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {getEventsForDay(day.date).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
