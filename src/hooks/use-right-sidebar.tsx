import { RightSidebarContext } from "@/contexts/sidebar-right";
import { useContext } from "react";

export const useRightSidebar = () => {
  const context = useContext(RightSidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
