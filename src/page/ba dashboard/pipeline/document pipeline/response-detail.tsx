import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { bytesToMB } from "@/constants/byteTomb";
import IconSelector from "@/constants/icon-selector";
import { DocumentIntake } from "@/types";
import { Download } from "lucide-react";
import React from "react";

interface ResponseDetailProps {
  TriggerButton: React.ReactNode;
  sheetData: DocumentIntake | null;
}

const ResponseDetail = ({ TriggerButton, sheetData }: ResponseDetailProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{TriggerButton}</SheetTrigger>

      <SheetContent
        style={{ width: "600px", maxWidth: "none" }}
        className="text-sm"
      >
        <SheetHeader>
          <SheetTitle>
            {sheetData?.DocumentName || "Document Details"}
          </SheetTitle>
          <SheetDescription>
            Details about the {sheetData?.DocumentName || "document"}
          </SheetDescription>
        </SheetHeader>
        <div className="details space-y-2 mt-4">
          <p>Is OCR Done: {sheetData?.IsOCRed ? "Yes" : "No"}</p>
          <p>
            Size:{" "}
            {sheetData?.Size ? bytesToMB(sheetData?.Size).toFixed(2) : "N/A"} MB
          </p>
          <p className="flex items-center">
            Document Type:{" "}
            {sheetData?.Extension && (
              <IconSelector icon={sheetData?.Extension} />
            )}
          </p>
          {sheetData?.DocumentUrl && (
            <Button className="bg-blue-600 h-9 text-xs hover:bg-blue-700">
              <a
                href={sheetData?.DocumentUrl}
                className="flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download File</span>
                <Download size={14} />
              </a>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponseDetail;
