import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartConfigs, ChartData } from "@/types";

interface chartProps {
  title: string;
  chartData: ChartData[];
  chartConfig: ChartConfigs;
  base_detail: string;
  Xaxis: string;
  Yaxis: string;
}

export default function Barchart({
  title,
  chartData,
  chartConfig,
  base_detail,
  Xaxis,
  Yaxis,
}: chartProps) {
  return (
    <Card className="bg-transparent shadow-none border-0">
      <CardHeader>
        <CardTitle className="text-sm text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative flex justify-center items-center">
        <p className="absolute -left-6 text-sm font-medium top-1/3 -rotate-90">
          {Xaxis}
        </p>
        <p className="absolute -bottom-5 left-1/2 text-sm font-medium">
          {Yaxis}
        </p>
        <ChartContainer config={chartConfig} className="h-[200px]">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="broswer"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="data" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm">
        <div className="leading-none text-muted-foreground">{base_detail}</div>
      </CardFooter>
    </Card>
  );
}
