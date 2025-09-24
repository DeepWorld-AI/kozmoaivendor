import { Input } from "@/components/ui/input";
import { data } from "@/custom data/ai-search-query";
import { useRightSidebar } from "@/hooks/use-right-sidebar";
import { ArrowUpFromLine, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Search() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setRightSidebarContent, setShowRightSidebar } = useRightSidebar();

  // api call to generate the summary
  function handleGenerateSummary() {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/summary");
    }, 2000);

    return () => clearInterval(timer);
  }

  useEffect(() => {
    setShowRightSidebar(false);
    return () => {
      setShowRightSidebar(true);
      setRightSidebarContent(null);
    };
  }, [setShowRightSidebar, setRightSidebarContent]);

  return (
    <>
      <div className="w-[70%] mx-auto">
        <div className="main mt-16">
          <div className="shadow-customShadow rounded-md flex items-center justify-between pr-4 ring-2 ring-indigo-500">
            <Input
              className="border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent h-12"
              placeholder="What are the risks in my pending contracts ? or Show contracts expiring this month"
            />
            <span className="flex justify-center items-center h-7 w-7 rounded-full bg-indigo-400 cursor-pointer">
              {loading ? (
                <LoaderCircle size={16} className="animate-spin text-white" />
              ) : (
                <ArrowUpFromLine
                  size={16}
                  className="font-bold text-white"
                  onClick={handleGenerateSummary}
                />
              )}
            </span>
          </div>

          {/* recommedation search */}
          <div className="grid grid-cols-2 gap-4 mt-24">
            {data.map((val, ind) => (
              <div key={ind}>
                <div className="w-full rounded-lg p-4 text-sm cursor-pointer hover:bg-gray-50 bg-white border">
                  <h3 className="text-sm font-semibold text-gray-700">
                    {val.header}
                  </h3>

                  <ul className="mt-2 space-y-1">
                    {val.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-400 text-xs flex items-start"
                      >
                        <span className="mr-2 text-indigo-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
