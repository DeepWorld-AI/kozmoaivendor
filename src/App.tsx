import "./css/global.css";
import { createBrowserRouter, Outlet } from "react-router";
import Priority from "./page/dashboard/priority/priority";
import Sidebar from "./layouts/sidebar/sidebar";
import Calendar from "./page/dashboard/calendar/calendar";
import CalendarSummary from "./page/dashboard/calendar/calendar-list";
import CalendarView from "./page/dashboard/calendar/calendar-view";
import Contract from "./page/dashboard/bookmark/contracts/contract";
import { ViewContextProvider } from "./contexts/view";
import ContractSummary from "./page/dashboard/bookmark/contracts/contract summary/contract-summary";
import DocumentUpload from "./page/dashboard/bookmark/documents/document-upload";
import Pipeline from "./page/ba dashboard/pipeline/pipeline";
import DocumentPipeline from "./page/ba dashboard/pipeline/document pipeline/document-pipeline";
import { LoadingContextProvider } from "./contexts/loading";
import BusinessAreaSummary from "./page/ba dashboard/ba summary/bsuiness-area-summary";
import Search from "./page/ai search query/search";
import GeneratedSummary from "./page/ai search query/generated-summary";
import { RightSidebarProvider } from "./contexts/sidebar-right";
import Documents from "./page/dashboard/bookmark/documents/documents";

function App() {
  return (
    <>
      <RightSidebarProvider>
        <Sidebar>
          <LoadingContextProvider>
            <Outlet />
          </LoadingContextProvider>
        </Sidebar>
      </RightSidebarProvider>
    </>
  );
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Priority />,
      },
      {
        path: "ask-ai",
        element: <Search />,
      },
      {
        path: "/summary",
        element: <GeneratedSummary />,
      },
      {
        path: "calendar",
        element: <Calendar />,
        children: [
          {
            path: "/calendar/calendar-summary",
            element: <CalendarSummary />,
          },
          {
            path: "/calendar",
            element: <CalendarView />,
          },
        ],
      },
      {
        path: "contracts",
        element: <Contract />,
      },
      {
        path: "/contracts/contractSummary",
        element: (
          <ViewContextProvider>
            <ContractSummary />,
          </ViewContextProvider>
        ),
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "document-upload",
        element: <DocumentUpload />,
      },
      {
        path: "/business-area",
        element: (
          <ViewContextProvider>
            <BusinessAreaSummary />
          </ViewContextProvider>
        ),
      },
      {
        path: "/pipeline",
        element: <Pipeline />,
        children: [
          {
            path: "/pipeline/document",
            element: <DocumentPipeline />,
          },
        ],
      },
    ],
  },
]);

export default Router;
