import React from "react";
import dayjs from "dayjs";
import { Trash2 } from "lucide-react";
import { dayNames } from "@/custom data/calendar";
import AddEvents from "./add-events";
import { formattedTime } from "@/constants/time-format";
import { ColourSelector } from "@/constants/color-selector";

interface CalendarProps {
  currentDate: dayjs.Dayjs;
  events: {
    id: string;
    color: string;
    event_name: string;
    description: string;
    stay_duration: string;
    start_time: string;
    end_time: string;
  }[];
  onEventClick: (event: {
    event_name: string;
    description: string;
    stay_duration: string;
    start_time: string;
    end_time: string;
  }) => void;
  deleteEvents: (id: string) => void;
}

const getMonthDays = (currentDate: dayjs.Dayjs): dayjs.Dayjs[] => {
  const daysInMonth = currentDate.daysInMonth();

  return Array.from({ length: daysInMonth }, (_, i) =>
    currentDate.startOf("month").add(i, "day")
  );
};

const getDayFromDateString = (dateStr: string) => {
  const date = dayjs(dateStr, "ddd, MMM D, hh:mm A");
  return date.date();
};

const MonthView: React.FC<CalendarProps> = ({
  currentDate,
  events,
  onEventClick,
  deleteEvents,
}) => {
  const monthDays = getMonthDays(currentDate);
  const firstDayOfMonth = currentDate.startOf("month");
  const startDayIndex = firstDayOfMonth.day();

  return (
    <div className="mt-4">
      {/* Render Day Names */}
      <div className="grid grid-cols-7 font-semibold text-center">
        {dayNames.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Render Month Days */}
      <div className="grid grid-cols-7 gap-2">
        {/* add empty cells for the before days of month */}
        {Array.from({ length: startDayIndex }).map((_, i) => (
          <div
            key={`empty-${i} h-20 border border-transparent`}
            className=""
          ></div>
        ))}

        {/* render month date */}
        {monthDays.map((date) => {
          const isToday =
            new Date().toDateString() === date.toDate().toDateString();

          return (
            <div
              key={date.toString()}
              className="h-24 rounded cursor-pointer border border-gray-300 p-2 relative"
            >
              {isToday ? (
                <span className="text-indigo-500 font-semibold">
                  {date.date()}
                </span>
              ) : (
                <span>{date.date()}</span>
              )}

              <AddEvents
                triggerButton={
                  <div
                    className="absolute inset-0 flex justify-center items-center cursor-pointer 
                  hover:bg-gradient-to-r hover:from-indigo-100 group hover:via-purple-100 hover:to-pink-100 rounded text-white hover:text-blue-600"
                  >
                    <span className="text-xs hidden group-hover:block">
                      + Add Event
                    </span>
                  </div>
                }
                onEventClick={onEventClick}
              />

              {events
                .filter(
                  (event) =>
                    getDayFromDateString(formattedTime(event.start_time)) ===
                    date.date()
                )
                .map((event) => {
                  return (
                    <div
                      key={event.id}
                      className={`z-50 cursor-pointer absolute w-[92%] left-1 bottom-1 rounded p-2 py-1 text-xs flex
                         justify-between items-start ${ColourSelector(
                           event.color
                         )}`}
                    >
                      <div>
                        <p className="font-semibold">{event.event_name}</p>
                        <p className="text-xs">{event.stay_duration}</p>
                      </div>

                      <button
                        onClick={() => deleteEvents(event.id)}
                        className="absolute top-2 right-2 text-red-600 cursor-pointer"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
