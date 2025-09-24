import Barchart from "@/components/charts/barChart";

function ActivityPlanGraph() {
  return (
    <>
      <Barchart
        title="Activity Plan Status"
        chartData={[
          {
            browser: "Business Review Feedback (2d behind)",
            data: -2,
            fill: "#ef4444",
          },
          {
            browser: "Legal Compliance Check (5d remaining)",
            data: 5,
            fill: "#22c55e",
          },
        ]}
        chartConfig={{
          data: {
            label: "Days",
          },
        }}
        base_detail=""
        Xaxis="Activities"
        Yaxis="Time (Days)"
      />
    </>
  );
}

export default ActivityPlanGraph;
