import { CalendarContext } from "@/contexts/calendar";
import { useContext } from "react";

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "Calendar-Context must be within the Calendar Context-Provider"
    );
  }

  return context;
};
