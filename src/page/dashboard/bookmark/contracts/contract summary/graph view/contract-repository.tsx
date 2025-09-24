import BarChart from "@/components/chart/bar-chart";
import PieChart from "@/components/chart/PieChart";

function ContractRepositoryOverview() {
  return (
    <div className="flex justify-around items-center mt-4">
      <BarChart
        title="Non-Standard/High-Risk Aspects"
        seriesData={[3, 2]}
        Xcategories={["Expedited Scope Review", "Late Penalties"]}
        Xtext=""
        Ytext=""
      />
      <PieChart
        title="Contract Distribution by Type"
        series={[3, 4, 2, 1]}
        labels={[
          "Service Agreement",
          "Master Service Agreement",
          "Software Licensing",
          "Dealer Contract",
        ]}
        colors={["#F857C1", "#F53255", "#F46920", "#FFAF00"]}
      />
    </div>
  );
}

export default ContractRepositoryOverview;
