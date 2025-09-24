"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartConfigs, ChartData } from "@/types";

interface piechartProps {
  title: string;
  chartData: ChartData[];
  chartConfig: ChartConfigs;
  base_detail: string;
}

export default function Piechart({
  title,
  chartData,
  chartConfig,
  base_detail,
}: piechartProps) {
  return (
    <Card className="flex flex-col bg-transparent shadow-none border-0">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-sm text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[300px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent nameKey="data" labelKey="browser" />
              }
            />
            <Pie
              data={chartData}
              dataKey="data"
              nameKey="browser"
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                  >
                    {payload.data}
                  </text>
                );
              }}
            >
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm flex justify-center items-center">
        <div className="leading-none text-muted-foreground text-center">
          {base_detail}
        </div>
      </CardFooter>
    </Card>
  );
}
