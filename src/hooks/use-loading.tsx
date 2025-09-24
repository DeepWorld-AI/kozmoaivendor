import { LoadingContext } from "@/contexts/loading";
import { useContext } from "react";

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error(
      "loading context must be within the loading context provider"
    );
  }

  return context;
};
