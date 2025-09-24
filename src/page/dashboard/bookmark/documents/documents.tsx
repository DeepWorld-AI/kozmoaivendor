import SearchFilter from "@/components/search filter/search-filter";
import { useRightSidebar } from "@/hooks/use-right-sidebar";
import { useEffect } from "react";
import DocumentTable from "./document-table";

const Documents = () => {
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
        <DocumentTable />
      </div>
    </>
  );
};

export default Documents;
