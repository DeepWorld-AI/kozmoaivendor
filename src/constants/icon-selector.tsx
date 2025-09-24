import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { BiSolidFileDoc } from "react-icons/bi";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { FileText } from "lucide-react";

interface IconSelectorProps {
  icon: string;
}

function IconSelector({ icon }: IconSelectorProps) {
  const name = icon?.split(".")[1];
  function chooseIcon() {
    switch (name) {
      case "pdf":
        return <BsFillFileEarmarkPdfFill className="text-red-600 text-lg" />;
      case "doc":
      case "word":
      case "docx":
        return <BiSolidFileDoc className="text-blue-600 text-xl" />;
      case "exe":
      case "excel":
        return <BsFileEarmarkExcelFill className="text-green-600 text-lg" />;
      default:
        return <FileText size={18} />;
    }
  }

  return <>{chooseIcon()}</>;
}

export default IconSelector;
