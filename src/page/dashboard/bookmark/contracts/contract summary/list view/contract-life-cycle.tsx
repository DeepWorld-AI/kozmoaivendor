import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const ContractLifeCycle: React.FC = () => {
  return (
    <>
      <div className="life-cycle-component">
        <div className="main">
          <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
            <span className="flex items-center gap-1">
              Drafting
              <Input type="checkbox" className="w-3 h-3" checked />
              (2d) <ChevronRight size={14} />
            </span>
            <span className="flex items-center">
              Internal Reviews 🔍 (4d) <ChevronRight size={14} />
            </span>
            <span className="flex items-center gap-1">
              Negotiation
              <Input type="checkbox" className="w-3 h-3" />
              <ChevronRight size={14} />
            </span>
            <div className="mr-2 flex items-center gap-1">
              <span>Approvals</span>
              <Input type="checkbox" className="w-3 h-3" />
              <ChevronRight size={14} />
            </div>
            <span className="flex items-center gap-1">
              Signature (10d)
              <Input type="checkbox" className="w-3 h-3" />
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-500 flex gap-4">
            <span className="flex items-center gap-1">
              Active
              <Input type="checkbox" className="w-3 h-3" />
            </span>
            <span className="flex items-center gap-1">
              Renewal
              <Input type="checkbox" className="w-3 h-3" />
            </span>
            <span className="flex items-center gap-1">
              Amendments
              <Input type="checkbox" className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractLifeCycle;
