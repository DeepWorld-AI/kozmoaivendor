import React from "react";
import dayjs from "dayjs";
import { Trash2 } from "lucide-react";
import AddEvents from "./add-events";
import { extractDatePart, formattedTime } from "@/constants/time-format";
import { ColourSelector } from "@/constants/color-selector";

interface weekProps {
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

const getWeekDays = (currentDate: any) => {
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + i);
    return day;
  });
};

const WeekView = ({
  currentDate,
  events,
  onEventClick,
  deleteEvents,
}: weekProps) => {
  const daysOfWeek = getWeekDays(currentDate);

  // helper function to check if the time falls between the hour range
  function calculateEventPosition(startTime: string, endTime: string) {
    const pixelsPerHour = 64; // Adjust as per your CSS layout
    const parseTimeToMinutes = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);
    const durationMinutes = Math.max(endMinutes - startMinutes, 20);

    return {
      top: ((startMinutes % 60) / 60) * pixelsPerHour,
      height: (durationMinutes / 60) * pixelsPerHour,
    };
  }

  return (
    <div className="mt-4">
      <div className="grid grid-cols-8 border rounded-md">
        <div className="border-r p-2 text-center font-bold">Time</div>
        {daysOfWeek.map((day, index) => {
          const isToday = new Date().toDateString() === day.toDateString();

          return (
            <div
              key={index}
              className={`border-r p-2 text-center font-medium ${
                isToday ? "text-indigo-500" : ""
              }`}
            >
              {day.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
              })}
            </div>
          );
        })}

        {/* Time Slots */}

        {[...Array(24)].map((_, hour) => (
          <React.Fragment key={hour}>
            <div className="border-t p-2 text-center text-sm font-medium">
              {hour}:00
            </div>
            {daysOfWeek.map((day, dayIndex) => (
              <div key={dayIndex} className="border-t h-16 relative group">
                <AddEvents
                  triggerButton={
                    <div className="absolute inset-0 flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100">
                      <span className="hidden group-hover:block text-xs text-blue-600">
                        + Add Event
                      </span>
                    </div>
                  }
                  onEventClick={onEventClick}
                />
                {events
                  .filter((event) => {
                    const eventDate = extractDatePart(
                      formattedTime(event.start_time)
                    );
                    const dayDate = extractDatePart(String(day));
                    const eventHour = parseInt(
                      event.start_time.split(":")[0],
                      10
                    );
                    return eventDate === dayDate && eventHour === hour;
                  })
                  .map((event) => {
                    const { top, height } = calculateEventPosition(
                      event.start_time,
                      event.end_time
                    );
                    return (
                      <div
                        key={event.id}
                        style={{
                          position: "absolute",
                          top: `${top}px`,
                          height: `${height}px`,
                        }}
                        className={`left-0 z-50 cursor-pointer right-0 rounded-lg px-2 py-1
                           flex justify-between items-start ${ColourSelector(
                             event.color
                           )}`}
                      >
                        <div className="text-xs">
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
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
