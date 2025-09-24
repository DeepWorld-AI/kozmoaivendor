import SearchFilter from "@/components/search filter/search-filter";
import RecordTable from "./contract-table";
import { useRightSidebar } from "@/hooks/use-right-sidebar";
import { useEffect } from "react";

const Contract = () => {
  const { setRightSidebarContent, setShowRightSidebar } = useRightSidebar();

  useEffect(() => {
    setShowRightSidebar(false);
    return () => {
      setShowRightSidebar(true);
      setRightSidebarContent(null);
    };
  }, [setShowRightSidebar, setRightSidebarContent]);
  return (
    <>
      <div className="text-sm space-y-5 relative">
        <SearchFilter placeholder="search contracts" />
        <RecordTable />
      </div>
    </>
  );
};

export default Contract;
