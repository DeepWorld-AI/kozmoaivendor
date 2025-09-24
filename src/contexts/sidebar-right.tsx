import { SidebarContextType } from "@/types";
import { createContext, ReactNode, useState } from "react";

export const RightSidebarContext = createContext<
  SidebarContextType | undefined
>(undefined);

export const RightSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [rightSidebarContent, setRightSidebarContent] =
    useState<ReactNode>(null);
  const [showRightSidebar, setShowRightSidebar] = useState<boolean>(true);

  return (
    <RightSidebarContext.Provider
      value={{
        rightSidebarContent,
        setRightSidebarContent,
        showRightSidebar,
        setShowRightSidebar,
      }}
    >
      {children}
    </RightSidebarContext.Provider>
  );
};
