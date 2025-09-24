import Basicbarchart from "@/components/chart/basic-bar-chart";
import PieChart from "@/components/chart/PieChart";

function ContractValueOverview() {
  return (
    <div className="flex justify-around items-center">
      <Basicbarchart />
    </div>
  );
}

export default ContractValueOverview;
