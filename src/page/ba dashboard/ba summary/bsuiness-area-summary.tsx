import { Button } from "@/components/ui/button";
import ToggleButton from "@/components/ui/togglebutton";
import { useView } from "@/hooks/use-view";
import { History } from "lucide-react";
import ContractRepositoryGraphicalView from "./graph view/contract-repository";
import ContractRepositoryTabularView from "./tabular view/contract-repository";
import { columns, dataItem } from "@/custom data/business-area";

function BusinessAreaSummary() {
  const { getView } = useView();
  return (
    <>
      <div className="business-area-summary">
        <div className="main space-y-2 text-sm w-[90%] mx-auto">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="italic text-slate-500 text-xs flex items-center gap-1">
              <History size={16} className="cursor-pointer" />
              Time Since Last Update: 2 hours ago
            </p>
            <div className="flex items-center gap-x-3 mt-2">
              <span className=" w-1/4 font-semibold">Business Area Name:</span>
              <p className="text-left flex-grow font-normal">Sales</p>
            </div>
            <div className="flex items-center gap-x-3 mt-2">
              <span className=" w-1/4 font-semibold">Business Area Owner:</span>
              <p className="text-left flex-grow font-normal">John Smith</p>
            </div>
            <div className="flex items-center gap-x-3 mt-2">
              <span className=" w-1/4 font-semibold">Contract Owners:</span>
              <p className="text-left flex-grow font-normal">
                Andrew Tang, Pia Cramling, Craig,{" "}
                <span className="text-sky-500">+5 others</span>
              </p>
            </div>
            <Button
              variant="outline"
              className="h-8 mt-2 text-sky-500 border border-sky-500 hover:bg-sky-100 "
            >
              Generate Report
            </Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <ToggleButton
              title="Contract Repository OverView"
              componentKey="contractRepositoryOverview"
              Allviews={["graph", "tabular"]}
            />

            {getView("contractRepositoryOverview") === "graph" ? (
              <ContractRepositoryGraphicalView />
            ) : (
              <ContractRepositoryTabularView
                columns={columns}
                data={dataItem}
              />
            )}
            <div className="mt-4">
              <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                View all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessAreaSummary;
