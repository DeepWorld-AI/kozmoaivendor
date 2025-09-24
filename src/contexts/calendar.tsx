import React, { createContext, ReactNode, useEffect, useState } from "react";
import dayjs from "dayjs";
import { AddEvents, deleteEvent, GetEvents } from "@/services/calendar-service";

interface contextProps {
  currentDate: dayjs.Dayjs;
  view: string;
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
  goToNext: () => void;
  goToPrevious: () => void;
  changeView: (newView: string) => void;
  deleteEvents: (id: string) => void;
}

export const CalendarContext = createContext<contextProps | undefined>(
  undefined
);

export const CalendarContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState<string>("month");
  const [events, setEvents] = useState([]);

  const onEventClick = async (event: any) => {
    await AddEvents(event);
    GetAllEvents();
  };

  function GetAllEvents() {
    const data = GetEvents();
    setEvents(data);
  }

  const deleteEvents = async (id: string) => {
    const leftEvents = deleteEvent(id);
    setEvents(leftEvents);
  };

  const goToNext = () => {
    setCurrentDate((prev: any) =>
      view === "day"
        ? prev.add(1, "day")
        : view === "week"
        ? prev.add(1, "week")
        : prev.add(1, "month")
    );
  };

  const goToPrevious = () => {
    setCurrentDate((prev: any) =>
      view === "day"
        ? prev.subtract(1, "day")
        : view === "week"
        ? prev.subtract(1, "week")
        : prev.subtract(1, "month")
    );
  };

  const changeView = (newView: string) => {
    setView(newView);
  };

  useEffect(() => {
    GetAllEvents();
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        view,
        events,
        onEventClick,
        goToNext,
        goToPrevious,
        changeView,
        deleteEvents,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
