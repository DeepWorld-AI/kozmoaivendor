import { Input } from "@/components/ui/input";
import { AlignJustify, CalendarDays } from "lucide-react";
import stars from "../../../assets/sparkle.png";
import { Link, useLocation } from "react-router";

interface CdHeaderProps {
  views: string | null;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarHeader: React.FC<CdHeaderProps> = ({ views, setView }) => {
  const location = useLocation();
  return (
    <>
      <header
        className={`flex items-center justify-between ${
          location.pathname === "/calendar/calendar-summary" ? "w-[90%] mx-auto" : ""
        }`}
      >
        <div className="flex w-full gap-2">
          <div className="flex items-center w-1/2 px-2 rounded bg-[#fafafa]">
            <img src={stars} alt="loading.." className="w-3" />
            <Input
              type="text"
              placeholder="Search Events..."
              className="text-xs border-0 bg-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Link
            to="/calendar/calendar-summary"
            className="flex items-center cursor-pointer text-sm"
            onClick={() => setView("list")}
          >
            <span className="p-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
              <div
                className={`p-1.5 rounded-md ${
                  views === "list" ? "text-black" : "bg-white"
                }`}
              >
                <AlignJustify size={16} />
              </div>
            </span>
          </Link>

          <Link
            to="/calendar"
            className="flex items-center cursor-pointer text-sm"
            onClick={() => setView("calendar")}
          >
            <span className="p-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
              <div
                className={`p-1.5 rounded-md ${
                  views === "calendar" ? "text-black" : "bg-white"
                }`}
              >
                <CalendarDays size={16} />
              </div>
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default CalendarHeader;
