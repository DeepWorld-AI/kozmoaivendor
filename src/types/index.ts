import { ReactNode } from "react";

export type ContractRecords = {
  id: string;
  contract_name: string;
  contract_no: number;
  contract_type: string;
  status: "pending" | "processing" | "success" | "failed";
  date: string;
};

export type DocumentRecords = {
  id: string;
  document_name: string;
  document_no: number;
  document_type: string;
  status: string;
  date_uploaded: string;
};

export type ChartData = {
  browser: string;
  data: number;
  fill: string;
};

export type ChartConfigs = {
  [key: string]: {
    label: string;
    color?: string;
  };
};

// Interface for all the batches
export interface AllBatches {
  BatchName: string;
  PipelineType: string;
  Status: string;
  Created: string;
  Modified?: string | null;
  NumberOfItems: number;
  ProcessedItems: number;
  FailedItems: number;
  PartitionKey: number;
  RowKey: string;
  Timestamp: string;
  ETag: string;
}

// Interface for each batch document intake
export interface batchDocument {
  PipelineBatchId: string;
  DocumentName: string;
  DocumentUrl: string;
  IngestionStatus: string;
  ClassificationStatus: string;
  RecordSetupStatus: string;
  Created: string;
  Modified?: string | null;
  IntegrationId: string;
  IntegrationType: string;
  PartitionKey: string;
  RowKey: string;
  Timestamp: string;
  ETag: string;
}

// Interface for Document intake details
export interface DocumentIntake {
  DocumentInTakePipelineId: string;
  DocumentName: string;
  Extension: ".pdf" | ".docx" | ".jpg";
  IsOCRed: boolean;
  Size: number;
  DocumentUrl: string;
  ExceptionMessage?: string;
  PartitionKey: string;
  RowKey: string;
  Timestamp: string;
  ETag: string;
}

export type SidebarContextType = {
  rightSidebarContent: ReactNode;
  setRightSidebarContent: (content: ReactNode) => void;
  showRightSidebar: boolean;
  setShowRightSidebar: (show: boolean) => void;
};
