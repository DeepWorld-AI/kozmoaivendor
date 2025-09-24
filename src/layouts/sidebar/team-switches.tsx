import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { GalleryVerticalEnd } from "lucide-react";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="hover:bg-transparent">
          <div
            className="flex aspect-square size-8 items-center bg-gradient-to-b from-indigo-500 justify-center rounded-lg bg-sidebar-primary
               text-sidebar-primary-foreground"
          >
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">eContracts</span>
            <span className="truncate text-xs">Kozmo AI</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
