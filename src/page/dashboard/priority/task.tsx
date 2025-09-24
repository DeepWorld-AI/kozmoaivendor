import { Button } from "@/components/ui/button";
import { ListRestart } from "lucide-react";

function MyTask() {
  return (
    <>
      <div className="task-component">
        <div className="main bg-[#fafafa] p-4 rounded-md">
          <div className="flex items-center space-x-2">
            <ListRestart size={16} className="text-blue-500" />
            <p className="font-semibold text-base">My Tasks</p>
          </div>
          <div className="mt-2">
            <div>
              <h2 className="font-medium text-gray-800">Workflow Tasks</h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 px-4 text-sm space-y-1">
                <li>
                  Review Request for Purchase Agreement -2024-PROC-015: Due
                  April 5, 2024
                </li>
                <li>
                  Finalize Draft for IT Equipment Purchase: Due April 5, 2024
                </li>
                <li>
                  Gather Input for Pharmaceutical Supply Contract: Due April 10,
                  2024
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-gray-800">Action Plan Tasks</h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 px-4 text-sm space-y-1">
                <li>
                  Follow-up with Finance on Budget Approval: Due April 3, 2024
                </li>
                <li>
                  Schedule Meeting with Clinical Staff for Needs Assessment: Due
                  April 7, 2024
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <Button className="relative px-4 text-xs font-medium rounded h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] text-transparent bg-clip-text border border-transparent">
                <span className="absolute inset-0 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -z-10"></span>
                View all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTask;
