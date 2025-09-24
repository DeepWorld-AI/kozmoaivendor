import { apiClient, handleApiError } from "./axios.service";

// method "GET" : get all the batches
export const Batches = async (userId: string) => {
  try {
    const response = await apiClient.get(`/${userId}/pipelineBatches`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// method "GET" : get all the document of individual batch
export const BatchDocuments = async (userId: string, batchId: string) => {
  try {
    const response = await apiClient.get(
      `/${userId}/documentInTakePipelines?batchId=${batchId}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// method "GET" : get the stage details of each document
export const stageDetails = async (userId: string, documentId: string) => {
  try {
    const response = await apiClient.get(
      `/${userId}/documentIngestionSummary?documentInTakePipelineId=${documentId}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
