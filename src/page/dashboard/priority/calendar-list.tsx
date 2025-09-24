import { Button } from "@/components/ui/button";
import { CalendarRange } from "lucide-react";

const CalendarList: React.FC = () => {
  return (
    <>
      <div className="calendar-list-view pt-2">
        <div className="main bg-[#fafafa] p-4 rounded-md text-sm">
          <div className="flex items-center space-x-2">
            <CalendarRange size={16} className="text-blue-500" />
            <p className="font-semibold text-base">My Calendar</p>
          </div>
          <div className="mt-2">
            <div>
              <h2 className="font-medium text-gray-800">Upcoming Deadlines</h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 px-4 text-sm space-y-1">
                <li>
                  April 3, 2024: Follow-up with Finance on Budget Approval
                </li>
                <li>
                  April 5, 2024: Approve Budget for PA-2024-PROC-015 & Finalize
                  IT Equipment Purchase Draft
                </li>
                <li>April 7, 2024: Schedule Meeting with Clinical Staff</li>
                <li>
                  April 10, 2024: Gather Input for Pharmaceutical Supply
                  Contract
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-gray-800">
                Suggested Schedule Changes
              </h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 text-sm px-4 space-y-1">
                <li>
                  April 5, 2024: Move Budget Approval Review Meeting by 2 days
                </li>
                <li>
                  April 7, 2024: Complete Assessment Meeting with Clinical Staff
                  today
                </li>
              </ul>
            </div>

            {/* View All Button */}
            <div className="mt-4">
              <Button className="px-4 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                View all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarList;
