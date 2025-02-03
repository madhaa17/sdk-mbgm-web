import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";
import { schoolDetail } from "@/type";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  imt_kurus_ringan: {
    label: "Kurus Ringan",
    color: "hsl(var(--chart-1))",
  },
  imt_kurus_berat: {
    label: "Kurus Berat",
    color: "hsl(var(--chart-2))",
  },
  imt_normal: {
    label: "Normal",
    color: "hsl(var(--chart-3))",
  },
  imt_gemuk_ringan: {
    label: "Gemuk Ringan",
    color: "hsl(var(--chart-4))",
  },
  imt_obesitas: {
    label: "Obesitas",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const ChartImt = ({ data }: { data: schoolDetail }) => {
  const chartData = data?.imt_chart?.map((item) => ({
    ...item,
    imt_kurus_ringan: Number(item.imt_kurus_ringan),
    imt_kurus_berat: Number(item.imt_kurus_berat),
    imt_normal: Number(item.imt_normal),
    imt_gemuk_ringan: Number(item.imt_gemuk_ringan),
    imt_obesitas: Number(item.imt_obesitas),
  }));

  return (
    <Card className="w-full rounded-2xl bg-card/70 h-[225px]">
      <CardContent className="h-full px-0 py-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            data={chartData}
            margin={{ left: 32, right: 32, top: 32, bottom: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="top"
              iconType="circle"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={<ChartTooltipContent />}
            />
            {Object.keys(chartConfig).map((key) => (
              <Line
                key={key}
                dataKey={key}
                type="monotone"
                //@ts-ignore
                stroke={chartConfig[key].color}
                strokeWidth={2}
                dot={{
                  r: 4,
                  strokeWidth: 2,
                  fill: "white",
                }}
                activeDot={{
                  r: 6,
                  strokeWidth: 2,
                  fill: "white",
                }}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartImt;
