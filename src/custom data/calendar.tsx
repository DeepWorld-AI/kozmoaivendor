import { CalendarDays, CalendarRange } from "lucide-react";
import { BsCalendar2Month } from "react-icons/bs";

export const viewOptions = [
  { key: "day", icon: <CalendarDays size={12} />, lable: "Day" },
  { key: "week", icon: <CalendarRange size={12} />, lable: "Week" },
  {
    key: "month",
    icon: <BsCalendar2Month className="text-xs" />,
    lable: "Month",
  },
];

export const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
