import * as React from "react";
import { Sidebar } from "@/components/ui/sidebar";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    ></Sidebar>
  );
}
