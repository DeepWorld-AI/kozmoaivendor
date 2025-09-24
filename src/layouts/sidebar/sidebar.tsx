import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { ReactNode } from "react";
import BreadCrumb from "../bread-crumb/bread-crumb";
import { useRightSidebar } from "@/hooks/use-right-sidebar";
import { SidebarRight } from "./quick-actions";

type PageProps = {
  children: ReactNode;
};

export default function Sidebar({ children }: PageProps) {
  const { rightSidebarContent, showRightSidebar } = useRightSidebar();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-12 shrink-0 items-center gap-2 border-b px-4 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <BreadCrumb />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-2">{children}</div>
      </SidebarInset>
      {showRightSidebar && <SidebarRight>{rightSidebarContent}</SidebarRight>}
    </SidebarProvider>
  );
}
