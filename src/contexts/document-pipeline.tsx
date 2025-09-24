import { useLoading } from "@/hooks/use-loading";
import {
  BatchDocuments,
  Batches,
  stageDetails,
} from "@/services/pipeline-service";
import { AllBatches, batchDocument, DocumentIntake } from "@/types";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  AllBatch: AllBatches[];
  batchDocuments: batchDocument[];
  setBatchDocuments: Dispatch<React.SetStateAction<batchDocument[]>>;
  getAllBatchDocuments: (batchId: string) => Promise<batchDocument[]>;
  getDocumentDetail: (documentId: string) => Promise<DocumentIntake | null>;
}

export const PipelineContext = createContext<ContextProps | undefined>(
  undefined
);

export const PipelineContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { setLoading } = useLoading();
  const [batches, setBatches] = useState<AllBatches[]>([]);
  const [batchDocuments, setBatchDocuments] = useState<batchDocument[]>([]);
  const userId = localStorage.getItem("userId") || "3Xae5Udc";

  // funciton to get all the batches
  async function getAllBatches(): Promise<void> {
    setLoading(true);
    try {
      const data = await Batches(userId);
      setBatches(data);

      if (data[0]?.RowKey) {
        await getAllBatchDocuments(data[0]?.RowKey);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // function to get all the document of individual batch
  async function getAllBatchDocuments(
    batchId: string
  ): Promise<batchDocument[]> {
    setLoading(true);
    try {
      const data: batchDocument[] = await BatchDocuments(userId, batchId);
      setBatchDocuments(data);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    } finally {
      setLoading(false);
    }
  }

  // function to get the stage details of individual document
  async function getDocumentDetail(
    documentId: string
  ): Promise<DocumentIntake | null> {
    try {
      const data: DocumentIntake | null = await stageDetails(
        userId,
        documentId
      );
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  useEffect(() => {
    getAllBatches();
  }, []);

  return (
    <PipelineContext.Provider
      value={{
        AllBatch: batches,
        batchDocuments,
        setBatchDocuments,
        getAllBatchDocuments,
        getDocumentDetail,
      }}
    >
      {children}
    </PipelineContext.Provider>
  );
};
