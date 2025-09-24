import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { LuRotateCw } from "react-icons/lu";

const SearchFilter = ({ placeholder }: { placeholder: string }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setIsFetching(true);
  };

  // Simulate data fetching
  useEffect(() => {
    if (isFetching) {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsFetching(false);
        setIsSpinning(false);
      };

      fetchData();
    }
  }, [isFetching]);

  return (
    <>
      <div className="search-filter-component">
        <div className="main flex space-x-2">
          <Input
            type="search"
            placeholder={placeholder}
            className="h-9 w-2/4"
          />
          <Button
            onClick={handleClick}
            className="bg-transparent border text-lg text-slate-400 h-9 hover:bg-gray-50"
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isSpinning ? "animate-spin" : ""
              }`}
            >
              <LuRotateCw />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
