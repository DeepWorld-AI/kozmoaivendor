import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { Trash2 } from "lucide-react";
import CalendarEvents from "./calendar-events";
import AddEvents from "./add-events";
import { ColourSelector } from "@/constants/color-selector";

dayjs.extend(isBetween);

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
    id: string;
    event_name: string;
    description: string;
    stay_duration: string;
    start_time: string;
    end_time: string;
  }) => void;
  deleteEvents: (id: string) => void;
}

const DayView = ({
  currentDate,
  events,
  onEventClick,
  deleteEvents,
}: CalendarProps) => {
  // helper function to check if the time falls between the hour range
  function calculateEventPosition(startTime: string, endTime: string) {
    const pixelsPerHour = 64;
    const parseTimeToMinutes = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);
    const durationMinutes = Math.max(endMinutes - startMinutes, 20);

    return {
      top: (startMinutes / 60) * pixelsPerHour,
      height: (durationMinutes / 60) * pixelsPerHour,
    };
  }

  return (
    <>
      <CalendarEvents EventData={events} deleteEvents={deleteEvents} />
      <div className="mt-4 p-4 border rounded relative h-auto">
        <h2 className="text-lg font-bold mb-4">
          {currentDate.format("dddd, MMMM D, YYYY")}
        </h2>
        <div className="relative h-full w-full">
          <div className="relative h-[1536px]">
            {[...Array(24)].map((_, hour) => (
              <div
                key={hour}
                className="border-t border-gray-200 h-16 relative flex items-center"
              >
                <span className="text-xs font-medium w-16 text-center">
                  {hour}:00
                </span>
                <div className="flex-1 h-full relative group hover:bg-blue-50">
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
                </div>
              </div>
            ))}
          </div>

          {events.map((event) => {
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
                className={`left-16 cursor-pointer right-0 rounded-lg
                p-2 flex justify-between items-start ${ColourSelector(
                  event.color
                )}`}
              >
                <div className="flex space-x-4 items-center">
                  <p className="font-semibold">{event.event_name}</p>
                  <p className="text-xs">{event.description}</p>
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
      </div>
    </>
  );
};

export default DayView;
