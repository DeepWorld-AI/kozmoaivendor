import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { BellRing, CalendarIcon } from "lucide-react";
import { useState } from "react";

function ContractUpdates() {
  const [date, setDate] = useState<Date>();
  return (
    <>
      <div className="contract-updates-component">
        <div className="main bg-[#fafafa] p-4 rounded-md">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <BellRing size={16} className="text-yellow-500" />
              <p className="font-semibold text-base">My Contract Updates</p>
            </div>
            <div className="flex items-center space-x-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[150px] justify-start text-left font-normal flex items-center text-xs space-x-2 h-8 text-slate-500",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon size={16} />
                    {date ? format(date, "PPP") : <span>Last 3 days</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <Select
                    onValueChange={(value) =>
                      setDate(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Today</SelectItem>
                      <SelectItem value="1">Yesterday</SelectItem>
                      <SelectItem value="3">Last 3 days</SelectItem>
                      <SelectItem value="7">Last week</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <Select>
                <SelectTrigger className="w-[130px] text-xs text-slate-500">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-2">
            <div>
              <h2 className="font-medium text-gray-800">Urgent Alerts</h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 px-4 text-sm space-y-1">
                <li>
                  <span className="font-semibold">Action Required:</span> Budget
                  Approval Pending for PA-2024-PROC-015
                </li>
                <li>
                  <span className="font-semibold">Reminder:</span> Submit Draft
                  for IT Equipment Purchase by April 5, 2024
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-gray-800">
                Other Important Activity
              </h2>
              <ul className="mt-2 list-disc list-inside text-gray-600 text-sm px-4 space-y-1">
                <li>
                  <span className="font-semibold">Document Uploaded:</span>{" "}
                  PA-2024-PROC-015 (Medical Supplies Agreement)
                </li>
                <li>
                  <span className="font-semibold">Review Completed:</span>{" "}
                  PA-2024-PROC-020 (IT Equipment Purchase)
                </li>
                <li>
                  <span className="font-semibold">Workflow Initiated:</span>{" "}
                  PA-2024-PROC-025 (Pharmaceutical Supply Contract)
                </li>
                <li>
                  <span className="font-semibold">Amendment Created:</span>{" "}
                  PA-2024-PROC-030 (Medical Equipment Lease)
                </li>
                <li>
                  <span className="font-semibold">Renewal Alert:</span>{" "}
                  PA-2024-PROC-035 (Cleaning Services Contract)
                </li>
              </ul>
            </div>

            {/* View All Button */}
            <div className="mt-4">
              <Button
                variant="default"
                className="px-4 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              >
                View all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContractUpdates;
