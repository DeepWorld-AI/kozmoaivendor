import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { z } from "zod";
import { Input } from "../ui/input";
import { FieldPath, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useState } from "react";
import { Label } from "../ui/label";
import { IdGenerator } from "@/constants/id-generator";

interface EventsProps {
  triggerButton: React.ReactNode;
  onEventClick: (event: {
    id: string;
    event_name: string;
    description: string;
    stay_duration: string;
    start_time: string;
    end_time: string;
  }) => void;
}

const formSchema = z
  .object({
    event_name: z.string().min(2).max(50),
    description: z.string().min(2).max(200),
    stay_duration: z.string().optional(),
    start_time: z
      .string()
      .regex(/^\d{2}:\d{2}$/, { message: "HH:mm format required" }),
    end_time: z
      .string()
      .regex(/^\d{2}:\d{2}$/, { message: "HH:mm format required" }),
  })
  .refine(
    (data) => {
      const [startHour, startMinute] = data.start_time.split(":").map(Number);
      const [endHour, endMinute] = data.end_time.split(":").map(Number);

      return endHour * 60 + endMinute > startHour * 60 + startMinute;
    },
    {
      message: "End time must be later than start time",
      path: ["end_time"],
    }
  );

const calculateDuration = (startTime: string, endTime: string) => {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  const diffMinutes = endTotalMinutes - startTotalMinutes;
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return `${hours}h ${minutes}min`;
};

const AddEvents = ({ triggerButton, onEventClick }: EventsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("red");
  const [activeColor, setActiveColor] = useState("red");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event_name: "",
      description: "",
      stay_duration: "",
      start_time: "",
      end_time: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const stayDuration = calculateDuration(data.start_time, data.end_time);
    const newData = {
      id: IdGenerator(),
      color: color,
      event_name: data.event_name ?? "",
      description: data.description ?? "",
      start_time: data.start_time ?? "",
      end_time: data.end_time ?? "",
      stay_duration: stayDuration,
    };

    onEventClick(newData);
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div onClick={() => setIsOpen(true)}>{triggerButton}</div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Events</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {["event_name", "description", "start_time", "end_time"].map(
                (field: string) => (
                  <FormField
                    key={field}
                    control={form.control}
                    name={field as FieldPath<z.infer<typeof formSchema>>}
                    render={({ field: inputField }) => (
                      <FormItem>
                        <FormLabel>
                          {field.replace("_", " ").toUpperCase()}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`Enter ${field.replace("_", " ")}`}
                            type={field.includes("time") ? "time" : "text"}
                            {...inputField}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )
              )}

              {/* set the color for events */}
              <div className="mt-2 flex flex-col">
                <Label>Choose Colour</Label>
                <div className="flex space-x-4 mt-2">
                  {["red", "green", "orange", "indigo"].map((clr) => (
                    <span
                      key={clr}
                      aria-label={`Choose ${clr}`}
                      title={`Choose ${clr}`}
                      style={{
                        backgroundColor: clr,
                      }}
                      className={`w-5 h-5 rounded cursor-pointer m-1 ${
                        activeColor === clr
                          ? "ring-2 ring-offset-1 ring-" + clr + "-500"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveColor(clr);
                        setColor(clr);
                      }}
                    ></span>
                  ))}
                </div>
              </div>

              <DialogFooter>
                <Button type="submit" className="bg-blue-500 text-xs">
                  Save Event
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEvents;
