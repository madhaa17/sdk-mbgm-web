import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";
import { data_imt } from "@/dummy";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  total_imt_kurus_ringan: {
    label: "Kurus Ringan",
    color: "hsl(var(--chart-1))",
  },
  total_imt_kurus_berat: { label: "Kurus Berat", color: "hsl(var(--chart-2))" },
  total_imt_normal: { label: "Normal", color: "hsl(var(--chart-3))" },
  total_imt_gemuk_ringan: {
    label: "Gemuk Ringan",
    color: "hsl(var(--chart-4))",
  },
  total_imt_gemuk_berat: { label: "Gemuk Berat", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

const ChartImt = () => {
  return (
    <Card className="w-full rounded-2xl bg-card/70 h-[253px]">
      <CardContent className="h-full py-2">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={data_imt.imt_stats}
            margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />

            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="top"
              iconType="square"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {Object.keys(chartConfig).map((key) => (
              <Line
                key={key}
                dataKey={key}
                type="monotone"
                stroke={
                  (chartConfig as Record<string, { color: string }>)[key].color
                }
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartImt;
