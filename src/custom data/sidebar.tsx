import {
  BookPlus,
  CalendarRange,
  FileCog,
  Frame,
  ListOrdered,
  PieChart,
  ShieldQuestion,
  Sparkles,
  Star,
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      lableName: "General",
      children: [
        {
          title: "Ask AI",
          url: "/ask-ai",
          icon: Sparkles,
        },
      ],
    },
    {
      lableName: "Dashboard",
      children: [
        {
          title: "My Dashboard",
          url: "/",
          icon: BookPlus,
          isActive: true,
        },
        {
          title: "My Calendar",
          url: "/calendar",
          icon: CalendarRange,
        },
        {
          title: "My Bookmarks",
          url: "#",
          icon: Star,
          items: [
            {
              title: "My Contracts",
              url: "/contracts",
            },
            {
              title: "My Documents",
              url: "/documents",
            },
          ],
        },
      ],
    },
    {
      lableName: "Business Area",
      children: [
        {
          title: "Business Area Dashboard",
          url: "/business-area",
          icon: BookPlus,
          isActive: true,
        },
        {
          title: "Pipeline",
          url: "#",
          icon: ListOrdered,
          items: [
            {
              title: "Document",
              url: "/pipeline/document",
            },
            {
              title: "Renewal",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      lableName: "Settings",
      children: [
        {
          title: "Document",
          url: "/",
          icon: FileCog,
          isActive: true,
        },
        {
          title: "Renewal",
          url: "/",
          icon: ShieldQuestion,
          isActive: true,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
