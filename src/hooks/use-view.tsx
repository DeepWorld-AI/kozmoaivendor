import { ViewContext } from "@/contexts/view";
import { useContext } from "react";

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error(
      "Calendar-Context must be within the Calendar Context-Provider"
    );
  }

  return context;
};
