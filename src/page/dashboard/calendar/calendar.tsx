import { useState } from "react";
import { Outlet } from "react-router";
import CalendarHeader from "./calendar-header";

const Calendar: React.FC = () => {
  const [view, setView] = useState<string>("calendar");
  return (
    <>
      <div className="calendar-component">
        <div className="main space-y-2">
          <CalendarHeader views={view} setView={setView} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Calendar;
