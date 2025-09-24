import Barchart from "@/components/charts/barChart";
import Piechart from "@/components/charts/pieChart";

function ContractRepositoryGraphicalView() {
  return (
    <>
      <div className="flex justify-around items-center mt-4">
        <Barchart
          title="Non-Standard/High-Risk Aspects"
          chartData={[
            { browser: "Expedited scope review", data: 20, fill: "#f95959" },
            { browser: "Late penalties", data: 15, fill: "#fdb44b" },
          ]}
          chartConfig={{
            data: { label: "Data" },
          }}
          base_detail=""
          Xaxis=""
          Yaxis=""
        />
        <Piechart
          title="Contract Distribution by Type"
          chartData={[
            {
              browser: "service",
              data: 25,
              fill: "#31C48D",
            },
            {
              browser: "master",
              data: 15,
              fill: "#76A9FA",
            },
            {
              browser: "software",
              data: 15,
              fill: "#f95959",
            },
            {
              browser: "dealer",
              data: 35,
              fill: "#fdb44b",
            },
          ]}
          chartConfig={{
            data: {
              label: "Data",
            },
            service: {
              label: "Service Agreement",
            },
            master: {
              label: "Master Service Agreement",
            },
            software: {
              label: "Software Licensing",
            },
            dealer: {
              label: "Dealer Contract",
            },
          }}
          base_detail="Showing all contract distribution"
        />
      </div>
    </>
  );
}

export default ContractRepositoryGraphicalView;
