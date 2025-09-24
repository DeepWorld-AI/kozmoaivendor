import { PipelineContext } from "@/contexts/document-pipeline";
import { useContext } from "react";

export const usePipeline = () => {
  const context = useContext(PipelineContext);
  if (!context) {
    throw new Error("context must be within the context provider");
  }

  return context;
};
