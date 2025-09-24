import { Button } from "@/components/ui/button";
import { ListRestart } from "lucide-react";

function MyWorkflows() {
  return (
    <>
      <div className="workflow-component">
        <div className="main bg-[#fafafa] p-4 rounded-md">
          <div className="flex items-center space-x-2">
            <ListRestart size={16} className="text-blue-500" />
            <p className="font-semibold text-base">My Workflows</p>
          </div>
          <div className="mt-2">
            <div>
              <h2 className="font-medium text-gray-800">Workflows Initiated</h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 px-4 text-sm space-y-1">
                <li>
                  WF-001: Initiate Medical Supplies Agreement | Status: In
                  Progress
                </li>
                <li>
                  WF-002: Start IT Equipment Purchase Process | Status:
                  Completed
                </li>
                <li>
                  WF-003: Launch Pharmaceutical Supply Contract Workflow |
                  Status: In Progress
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-gray-800">
                Workflows Involved In
              </h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 px-4 text-sm space-y-1">
                <li>
                  WF-004: Review Medical Equipment Lease Amendment | Status:
                  Pending
                </li>
                <li>
                  WF-005: Collaborate on Cleaning Services Renewal | Status: In
                  Review
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

export default MyWorkflows;
