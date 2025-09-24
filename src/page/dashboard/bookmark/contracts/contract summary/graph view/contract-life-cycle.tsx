import MixedBarChart from "@/components/charts/mixed-barChart";

function ContractLifeCycleGraph() {
  return (
    <div className="space-y-14">
      {/* Chart for Contract Stages and Durations */}
      <MixedBarChart
        title="Contract Stages and Durations"
        chartData={[
          { browser: "Signature", data: 20, fill: "#31C48D" },
          { browser: "Approvals", data: 15, fill: "#76A9FA" },
          { browser: "Negotiation", data: 20, fill: "#9CA3AF" },
          {
            browser: "Internal Reviews",
            data: 25,
            fill: "var(--color-edge)",
          },
          { browser: "Drafting", data: 30, fill: "var(--color-other)" },
        ]}
        chartConfig={{
          data: { label: "Days" },
          chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
          safari: { label: "Safari", color: "hsl(var(--chart-2))" },
          firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
          edge: { label: "Edge", color: "hsl(var(--chart-4))" },
          other: { label: "Other", color: "hsl(var(--chart-5))" },
        }}
        base_detail="Showing total stages in days"
        Xaxis="Stages"
        Yaxis="Duration (days)"
      />

      {/* Chart for Contract Status */}
      <MixedBarChart
        title="Contract Status"
        chartData={[
          { browser: "Active", data: 20, fill: "#31C48D" },
          { browser: "Renewal", data: 15, fill: "#76A9FA" },
          { browser: "Amendments", data: 20, fill: "#9CA3AF" },
        ]}
        chartConfig={{
          data: { label: "Counts" },
          chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
          safari: { label: "Safari", color: "hsl(var(--chart-2))" },
          firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
          edge: { label: "Edge", color: "hsl(var(--chart-4))" },
          other: { label: "Other", color: "hsl(var(--chart-5))" },
        }}
        base_detail="Showing all contract statuses"
        Xaxis=""
        Yaxis="Counts"
      />
    </div>
  );
}

export default ContractLifeCycleGraph;
