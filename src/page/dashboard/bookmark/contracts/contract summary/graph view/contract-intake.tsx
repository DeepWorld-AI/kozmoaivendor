import StackedColumnChart from "@/components/chart/stacked-column-chart";

function ContractIntakeMetrix() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-sm font-semibold text-center mb-4">
        New Contracts and Intake Metrics by Type and Completion Status
      </h1>

      <StackedColumnChart />
    </div>
  );
}

export default ContractIntakeMetrix;
