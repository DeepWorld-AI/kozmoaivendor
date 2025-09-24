import axios from "axios";
const BaseUrl = import.meta.env.VITE_BASE_URL;

// create an instance of axios with base url
export const apiClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    "eContracts-ApiKey":
      "4oTDTxvMgJjbGtZJdFAnwBCroe8uoVGvk+0fR3bHzeqs9KDPOJAzuzvXh9TSuiUvl7r2dhNhaNOcv598qie65A==",
  },
});

// handle API Error
export const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data || error.message);
  } else {
    console.log(error);
  }
};
