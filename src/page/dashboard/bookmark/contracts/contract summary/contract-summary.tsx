import { History } from "lucide-react";
import { useView } from "@/hooks/use-view";
import {
  contractSummarycolumns,
  contractSummarydata,
} from "@/custom data/contracts";
import ToggleButton from "@/components/ui/togglebutton";
import ContractLifeCycle from "./list view/contract-life-cycle";
import AcitivityPlan from "./list view/activity-plan";
import ReviewInsights from "./list view/review-insights";
import ContractHighLights from "./list view/contract-highlights";
import ActivityTimeline from "./list view/activity-timeline";
import ContractLifeCycleGraph from "./graph view/contract-life-cycle";
import ActivityPlanGraph from "./graph view/activity-plan";
import ReviewInsightsGraph from "./graph view/review-insights";
import ReviewInsightsTabular from "./tabular view/review-insights";

const ContractSummary: React.FC = () => {
  const { getView } = useView();

  return (
    <>
      <div className="contract-summary space-y-2 w-[90%] mx-auto">
        {/* <ToggleView heading={"AI Generated Contract Summary"} /> */}

        {/* list view summary */}

        <div className="text-sm">
          <div className="bg-gray-50 p-4 rounded-md text-gray-500">
            <p className="italic text-slate-500 text-xs flex items-center gap-1">
              <History size={16} className="cursor-pointer" />
              Time Since Last Update: 2 hours ago
            </p>
            <div className="flex items-center gap-x-3">
              <span className="font-medium w-1/6">Contract Title:</span>
              <p className="text-left flex-grow">
                Aviation Planning Consulting Services for Chicago O'Hare
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="font-medium w-1/6">Contract Type:</span>
              <p className="text-left flex-grow">Consulting Agreement</p>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="font-medium w-1/6">Counterparty:</span>
              <p className="text-left flex-grow">Chicago O'Hare Airport</p>
            </div>
          </div>
        </div>

        {/* Contract Life Cycle */}
        <div className="bg-gray-50 p-4 rounded-md">
          <ToggleButton
            title="Lifecycle Progress Bar"
            componentKey="contractLifeCycle"
            Allviews={["list", "graph"]}
          />
          {getView("contractLifeCycle") === "list" ? (
            <ContractLifeCycle />
          ) : (
            <ContractLifeCycleGraph />
          )}
        </div>

        {/* Activity Plan */}
        <div className="bg-gray-50 p-4 rounded-md">
          <ToggleButton
            title="Activity Plan"
            componentKey="activityPlan"
            Allviews={["list", "graph"]}
          />
          {getView("activityPlan") === "list" ? (
            <AcitivityPlan />
          ) : (
            <ActivityPlanGraph />
          )}
        </div>

        {/* Review Insights */}
        <div className="bg-gray-50 p-4 rounded-md">
          <ToggleButton
            title="Review Insights"
            componentKey="reviewInsights"
            Allviews={["list", "graph", "tabular"]}
          />
          {getView("reviewInsights") === "list" ? (
            <ReviewInsights />
          ) : getView("reviewInsights") === "graph" ? (
            <ReviewInsightsGraph />
          ) : (
            <ReviewInsightsTabular
              columns={contractSummarycolumns}
              data={contractSummarydata}
            />
          )}
        </div>

        {/* Contract Highlights */}
        <div className="bg-gray-50 p-4 rounded-md">
          <ToggleButton
            title="Contract Highlights"
            componentKey="contractHighlights"
            Allviews={["list"]}
          />
          <ContractHighLights />
        </div>

        {/* Activity Timeline */}
        <div className="bg-gray-50 p-4 rounded-md">
          <ToggleButton
            title="Activity Timeline"
            componentKey="activityTimeline"
            Allviews={["list"]}
          />
          <ActivityTimeline />
        </div>
      </div>
    </>
  );
};

export default ContractSummary;
