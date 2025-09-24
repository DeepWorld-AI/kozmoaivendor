import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCalendar } from "@/hooks/use-calendar";
import React from "react";
import { viewOptions } from "@/custom data/calendar";
import MonthView from "./month-view";
import WeekView from "./week-view";
import DayView from "./day-view";

type renderView = {
  key: string;
  icon: React.ReactNode;
  lable: string;
};

const Calendar = () => {
  const {
    currentDate,
    view,
    events,
    onEventClick,
    goToNext,
    goToPrevious,
    changeView,
    deleteEvents,
  } = useCalendar();

  const renderViewButton = ({ key, icon, lable }: renderView) => (
    <Button
      key={key}
      onClick={() => changeView(key)}
      className={`h-9 text-xs px-4 space-x-1 ${
        view === key ? "bg-blue-600 text-white" : ""
      }`}
      variant="outline"
    >
      {icon}
      <span>{lable}</span>
    </Button>
  );

  return (
    <div className="calendar">
      <div className="controls flex justify-between items-center">
        <div className="view-options space-x-2">
          {viewOptions.map((option) => renderViewButton(option))}
        </div>

        <h2 className="font-medium text-base">
          {currentDate.format(
            view === "day"
              ? "DD MMM YYYY"
              : view === "week"
              ? "MMM DD - YYYY"
              : "MMMM YYYY"
          )}
        </h2>

        <div className="space-x-2 flex items-center">
          <Button
            onClick={goToPrevious}
            className="h-9 text-xs space-x-1 px-3"
            variant="outline"
          >
            <ArrowLeft size={12} />
            <span>Prev</span>
          </Button>

          <Button
            onClick={goToNext}
            className="h-9 text-xs space-x-1 px-3"
            variant="outline"
          >
            <span>Next</span>
            <ArrowRight size={12} />
          </Button>
        </div>
      </div>

      <div className="calendar-grid">
        {view === "month" && (
          <MonthView
            currentDate={currentDate}
            events={events}
            onEventClick={onEventClick}
            deleteEvents={deleteEvents}
          />
        )}
        {view === "week" && (
          <WeekView
            currentDate={currentDate}
            events={events}
            onEventClick={onEventClick}
            deleteEvents={deleteEvents}
          />
        )}
        {view === "day" && (
          <DayView
            currentDate={currentDate}
            events={events}
            onEventClick={onEventClick}
            deleteEvents={deleteEvents}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
