import Calendar from "@/components/calendar/calendar";
import { CalendarContextProvider } from "@/contexts/calendar";
import { useRightSidebar } from "@/hooks/use-right-sidebar";
import { useEffect } from "react";

const CalendarView: React.FC = () => {
  const { setRightSidebarContent, setShowRightSidebar } = useRightSidebar();

  useEffect(() => {
    setShowRightSidebar(false);
    return () => {
      setShowRightSidebar(true);
      setRightSidebarContent(null);
    };
  }, [setShowRightSidebar, setRightSidebarContent]);
  return (
    <>
      <div className="calendar-list-view">
        <div className="main text-sm pt-2 rounded-md">
          <CalendarContextProvider>
            <Calendar />
          </CalendarContextProvider>
        </div>
      </div>
    </>
  );
};

export default CalendarView;
