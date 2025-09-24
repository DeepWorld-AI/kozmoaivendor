import BarChart from "@/components/chart/bar-chart";

function ContractRenewalPipeline() {
  return (
    <div className="space-y-14 mt-4">
      <BarChart
        title="Renewal Funnel Chart"
        seriesData={[100, 70, 50, 40]}
        Xcategories={[
          "Initial Review",
          "In Negotiation",
          "Final Approval",
          "Renewed",
        ]}
        Xtext="Percentage of Contracts"
        Ytext="Pipeline Stage"
      />
    </div>
  );
}

export default ContractRenewalPipeline;
