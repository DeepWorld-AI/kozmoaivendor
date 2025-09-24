import MixedBarChart from "@/components/charts/mixed-barChart";
import Piechart from "@/components/charts/pieChart";

function ReviewInsightsGraph() {
  return (
    <>
      <div className="flex justify-around items-center">
        <Piechart
          title="Clause status"
          chartData={[
            {
              browser: "approved",
              data: 25,
              fill: "#31C48D",
            },
            {
              browser: "under",
              data: 10,
              fill: "#76A9FA",
            },
          ]}
          chartConfig={{
            data: {
              label: "Data",
            },
            approved: {
              label: "Approved Clauses",
            },
            under: {
              label: "Under Review Clauses",
            },
          }}
          base_detail="Showing all clause status"
        />
        <MixedBarChart
          title="Non-Standard/High-Risk Aspects"
          chartData={[
            { browser: "Expedited scope review", data: 20, fill: "#31C48D" },
            { browser: "Late penalties", data: 15, fill: "#76A9FA" },
          ]}
          chartConfig={{
            data: { label: "Data" },
          }}
          base_detail="showing all non-standard high-risk aspects"
          Xaxis=""
          Yaxis=""
        />
      </div>
    </>
  );
}

export default ReviewInsightsGraph;
