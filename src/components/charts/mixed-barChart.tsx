import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
import { ChartData, ChartConfigs } from "@/types";

interface chartProps {
  title: string;
  chartData: ChartData[];
  chartConfig: ChartConfigs;
  base_detail: string;
  Xaxis: string;
  Yaxis: string;
}

function MixedBarChart({
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
      <CardContent className="relative">
        <p className="absolute -left-4 text-sm font-medium top-1/3 -rotate-90">
          {Xaxis}
        </p>
        <p className="absolute -bottom-3 left-1/2 text-sm font-medium">
          {Yaxis}
        </p>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              
            />
            <XAxis dataKey="data" type="number"  />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot"/>}
            />
            <Bar
              dataKey="data"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="browser"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="data"
                position="right"
                offset={8}
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

export default MixedBarChart;
