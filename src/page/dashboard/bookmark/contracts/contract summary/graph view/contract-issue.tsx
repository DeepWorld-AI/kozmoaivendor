import LineColumnChart from "@/components/chart/line-column-chart";

function ContractIssueMetrix() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-sm font-semibold text-center mb-4">
        New Contracts and Intake Metrics by Type and Completion Status
      </h1>

      <LineColumnChart />
    </div>
  );
}

export default ContractIssueMetrix;
