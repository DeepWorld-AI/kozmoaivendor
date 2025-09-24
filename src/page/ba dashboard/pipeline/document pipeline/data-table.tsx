import { ListVideo, Loader2 } from "lucide-react";
import { DocumentIntake } from "@/types";
import ResponseDetail from "./response-detail";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface TableProps {
  Record: any[];
  loading: boolean;
  getSheetData: (id: string) => void;
  sheetData: DocumentIntake | null;
}

const Table = ({ Record, loading, getSheetData, sheetData }: TableProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 font-medium text-green-700 ring-1 ring-inset ring-green-600/20";
      case "Needs Review":
        return "inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10";
      case "Failed":
        return "inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 font-medium text-red-700 ring-1 ring-inset ring-red-600/10";
      case "NotStarted":
        return "inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10";
      default:
        return "-";
    }
  };

  return (
    <div className="text-xs relative overflow-x-auto rounded">
      {loading ? (
        <div className="flex justify-center items-center my-4">
          <Loader2 className="animate-spin text-gray-600" size={20} />
          <span className="ml-2">Loading data...</span>
        </div>
      ) : (
        <table className="w-full text-left table-auto whitespace-nowrap">
          <thead className="bg-[#fafafa] h-12">
            <tr>
              <th className="px-4 py-2 border-r border-gray-100 font-semibold">
                <span>📄 Documents</span>
              </th>
              <th className="px-4 py-2 border-r border-gray-100 font-semibold">
                🔄 Ingestion
              </th>
              <th className="px-4 py-2 border-r border-gray-100 font-semibold">
                📝 Ingestion Summary
              </th>
              <th className="px-4 py-2 border-r border-gray-100 font-semibold">
                ✨ Classification
              </th>
              <th className="px-4 py-2 border-r border-gray-100 font-semibold">
                📋 Classification Summary
              </th>
              <th className="px-4 py-2 border-r border-gray-100 font-semibold">
                ⚙️ Record Setup
              </th>
              <th className="px-4 py-2 font-semibold">
                📄 Record Setup Summary
              </th>
            </tr>
          </thead>

          <tbody>
            {Record.length > 0 ? (
              Record.map((row, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-50 px-4 py-2 h-12 font-medium">
                    {row.DocumentName}
                  </td>
                  <td
                    className={`border-b border-l border-gray-50 px-2 py-2 text-center`}
                  >
                    <span
                      className={`rounded-full text-[0.6rem] ${getStatusClass(
                        row.IngestionStatus
                      )}`}
                    >
                      {row.IngestionStatus}
                    </span>
                  </td>
                  <td className="px-2 py-4 italic flex items-center justify-center space-x-4 group border-b border-l border-gray-50">
                    <span className="text-slate-400">View Summary</span>
                    <ResponseDetail
                      TriggerButton={
                        <ListVideo
                          size={12}
                          className="cursor-pointer text-white group-hover:text-black"
                          onClick={() => getSheetData(row.RowKey)}
                        />
                      }
                      sheetData={sheetData}
                    />
                  </td>
                  <td
                    className={`border-b border-l border-gray-50 px-4 py-2 text-center`}
                  >
                    <span
                      className={`rounded-full text-[0.6rem] ${getStatusClass(
                        row.ClassificationStatus
                      )}`}
                    >
                      {row.ClassificationStatus}
                    </span>
                  </td>
                  <td className="border-b border-l border-gray-50 px-4 py-2"></td>
                  <td
                    className={`border-b border-l border-gray-50 px-4 py-2 text-center`}
                  >
                    <span
                      className={`rounded-full text-[0.6rem] ${getStatusClass(
                        row.RecordSetupStatus
                      )}`}
                    >
                      {row.RecordSetupStatus}
                    </span>
                  </td>
                  <td className="border-b border-l border-gray-50 px-4 py-2"></td>
                </tr>
              ))
            ) : (
              <div className="mt-4">
                <Button variant="outline" className="border-dashed border-blue-600">
                  <Link to="/document-upload" className="text-blue-500">Add Documents</Link>
                </Button>
              </div>
            )}
          </tbody>
        </table>
      )}
      {/* <div className="mt-4 text-gray-600">
          8/9 items in progress; 4/9 Needs Review; 2/9 Failed.
        </div> */}
    </div>
  );
};

export default Table;
