import { BellRing } from "lucide-react";

const AcitivityPlan: React.FC = () => {
  return (
    <>
      <div className="acitivty-plan-component">
        <div className="main">
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-red-500 mr-2">🔴</span>
              Urgent: Business Review Feedback (2 days behind schedule)
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500 mr-3">
                <BellRing size={16} />
              </span>
              Legal Compliance Check: 5 Days Remaining
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcitivityPlan;
