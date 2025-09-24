import React, { useEffect, useState } from "react";
import { ArrowUpCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRightSidebar } from "@/hooks/use-right-sidebar";
import { bytesToMB } from "@/constants/byteTomb";

const DocumentUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);
  const { setRightSidebarContent, setShowRightSidebar } = useRightSidebar();

  useEffect(() => {
    setShowRightSidebar(false);
    return () => {
      setShowRightSidebar(true);
      setRightSidebarContent(null);
    };
  }, [setShowRightSidebar, setRightSidebarContent]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    setUploadProgress(droppedFiles.map(() => 40));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      setUploadProgress(selectedFiles.map(() => 40));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setUploadProgress(uploadProgress.filter((_, i) => i !== index));
  };

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-blue-300 rounded-lg
         text-gray-500 cursor-pointer hover:border-indigo-500 pt-2 space-y-1"
      >
        <ArrowUpCircle size={40} className="text-indigo-500" />
        <p className="mt-2 text-sm">
          Drag and Drop file here or{" "}
          <label
            htmlFor="file-input"
            className="text-indigo-500 underline cursor-pointer"
          >
            Choose file
          </label>
        </p>
        <p className="text-xs text-gray-400">Supported formats: Pdf, docx</p>
        <p className="text-xs text-gray-400">Maximum size: 25MB</p>
        <Input
          id="file-input"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <p className="text-center text-sm text-slate-500">Total documents listed : {files.length}</p>

      {/* document list */}
      <div className="grid grid-cols-1 gap-2 mx-auto  items-center space-y-2">
        {files.map((val, ind) => (
          <div
            key={ind}
            className="flex justify-between px-2 py-2 gap-x-1 items-center border border-dashed rounded-md"
          >
            <div className="flex items-center gap-2">
              <p className="text-sm">{val.name}</p>
              <p className="text-[0.7rem] text-slate-400 italic">
                ({bytesToMB(Number(val.size)).toFixed(2)}MB)
              </p>
            </div>
            <X
              size={16}
              className="text-red-500 cursor-pointer"
              onClick={() => removeFile(ind)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DocumentUpload;
