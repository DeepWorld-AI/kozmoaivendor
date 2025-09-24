import CalendarList from "./calendar-list";
import ContractUpdates from "./contract-updates";
import MyTask from "./task";
import MyWorkflows from "./workflows";
function Priority() {
  return (
    <>
      <div className="ai-response-compoent">
        <div className="main text-sm">
          <div className="space-y-4 w-[90%] mx-auto">
            <ContractUpdates />
            <MyWorkflows />
            <MyTask />
            <CalendarList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Priority;
