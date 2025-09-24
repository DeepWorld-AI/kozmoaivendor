import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { AllBatches, batchDocument, DocumentIntake } from "@/types";
import { useLoading } from "@/hooks/use-loading";
import { usePipeline } from "@/hooks/use-pipeline";
import DocumentPipelineSkeleton from "@/shimmer/document-pipeline";
import Table from "./data-table";
import { useRightSidebar } from "@/hooks/use-right-sidebar";

const DocumentPipeline = () => {
  const { loading } = useLoading();
  const {
    AllBatch,
    batchDocuments,
    setBatchDocuments,
    getAllBatchDocuments,
    getDocumentDetail,
  } = usePipeline();
  const [batches, setBatches] = useState<AllBatches[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>();
  const [sheetData, setSheetData] = useState<DocumentIntake | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const { setRightSidebarContent, setShowRightSidebar } = useRightSidebar();

  useEffect(() => {
    setShowRightSidebar(false);
    return () => {
      setShowRightSidebar(true);
      setRightSidebarContent(null);
    };
  }, [setShowRightSidebar, setRightSidebarContent]);

  const getSheetData = async (id: string) => {
    const response: DocumentIntake | null = await getDocumentDetail(id);
    setSheetData(response);
  };

  // Sync batches with AllBatch from the context
  useEffect(() => {
    if (AllBatch?.length > 0) {
      setBatches(AllBatch);
      setSelectedTab(AllBatch[0]?.BatchName);
    }
  }, [AllBatch]);

  // Function to fetch batch documents
  async function getAllBatchDocument(id: string) {
    const response: batchDocument[] = await getAllBatchDocuments(id);
    setBatchDocuments(response);
  }

  // Scroll tabs container left or right
  const scrollTabs = (direction: "left" | "right") => {
    if (tabsContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      console.log(scrollAmount);
    }
  };

  // Function to add new batch
  const addNewBatch = () => {
    const newBatch: AllBatches = {
      BatchName: `Batch ${Date.now()}`,
      PipelineType: "TypeA",
      Status: "New",
      Created: new Date().toISOString(),
      Modified: null,
      NumberOfItems: 0,
      ProcessedItems: 0,
      FailedItems: 0,
      PartitionKey: Math.floor(Math.random() * 1000),
      RowKey: `row_${Date.now()}`,
      Timestamp: new Date().toISOString(),
      ETag: "",
    };

    setBatches((prevBatches) => {
      const updatedBatches = [...prevBatches, newBatch];
      setSelectedTab(newBatch.BatchName);
      return updatedBatches;
    });

    getAllBatchDocument(newBatch.RowKey);
  };

  // Handle empty state for AllBatch
  if (!AllBatch || AllBatch.length === 0) {
    return (
      <>
        <DocumentPipelineSkeleton />
      </>
    );
  }

  return (
    <div className="document-intake-component">
      <div className="main">
        <div className="batch-files w-full">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <div className="relative w-full flex items-center">
              <button
                onClick={() => scrollTabs("left")}
                className="absolute left-0 z-10 p-3 hover:bg-white rounded-full bg-[#fafafa]"
              >
                <ArrowLeft size={14} />
              </button>

              <TabsList
                ref={tabsContainerRef}
                className="flex justify-start w-full overflow-x-auto rounded-full whitespace-nowrap px-10 no-scrollbar bg-[#fafafa]"
              >
                {batches?.map((batch) => (
                  <TabsTrigger
                    key={batch.RowKey}
                    value={batch.BatchName}
                    onClick={() => {
                      getAllBatchDocument(batch.RowKey);
                      setSelectedTab(batch.BatchName);
                    }}
                    className="flex-shrink-0 px-4 py-2"
                  >
                    {batch.BatchName.length > 3
                      ? `${batch.BatchName.slice(0, 3)}..`
                      : batch.BatchName}
                  </TabsTrigger>
                ))}
                <TabsTrigger
                  value="new tab"
                  className="flex-shrink-0 px-4 py-2"
                  onClick={addNewBatch}
                >
                  <Plus size={18} />
                </TabsTrigger>
              </TabsList>

              <button
                onClick={() => scrollTabs("right")}
                className="absolute right-0 z-10 p-3 hover:bg-white rounded-full bg-[#fafafa]"
              >
                <ArrowRight size={14} />
              </button>
            </div>
            {batches.map((batch) => (
              <TabsContent key={batch.RowKey} value={batch.BatchName}>
                <Table
                  Record={batchDocuments}
                  loading={loading}
                  getSheetData={getSheetData}
                  sheetData={sheetData}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DocumentPipeline;
