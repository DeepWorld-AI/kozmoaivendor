import { Tabs } from "@/components/ui/tabs";

const DocumentPipelineSkeleton = () => {
  return (
    <div className="document-intake-component">
      <div className="main">
        <div className="batch-files w-full">
          <Tabs className="w-full">
            <div className="relative flex items-center mt-2">
              {/* Tabs List - Skeleton */}
              <div className="flex justify-start w-full overflow-x-auto whitespace-nowrap no-scrollbar">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-4 py-2 mr-1 bg-[#fafafa] animate-pulse rounded-md"
                      style={{ width: "120px", height: "40px" }}
                    />
                  ))}
                <div
                  className="flex-shrink-0 px-4 py-2 bg-[#fafafa] animate-pulse rounded-md"
                  style={{ width: "120px", height: "40px" }}
                />
              </div>
            </div>

            {/* Content - Skeleton */}
            <div className="animate-pulse mt-2">
              {Array(1)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <div className="h-10 w-3/4 bg-[#fafafa] rounded-md mb-2" />
                    <div className="h-64 w-full bg-[#fafafa] rounded-md" />
                  </div>
                ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DocumentPipelineSkeleton;
