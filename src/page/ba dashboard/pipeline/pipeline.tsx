import { PipelineContextProvider } from "@/contexts/document-pipeline";
import { Outlet } from "react-router";

const Pipeline = () => {
  return (
    <>
      <PipelineContextProvider>
        <div className="pipeline-component">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </PipelineContextProvider>
    </>
  );
};

export default Pipeline;
