import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";
import { ImtType } from "@/type";
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

const dummyData = [
  {
    id: "dummy-1",
    total_student: 1103,
    total_imt_kurus_berat: 130,
    total_imt_kurus_ringan: 163,
    total_imt_normal: 700,
    total_imt_gemuk_ringan: 40,
    total_imt_gemuk_berat: 70,
    updated_at: "2025-2",
  },
];

const ChartImt = ({ data }: { data: ImtType[] }) => {
  const chartData = [
    ...(data?.map((item) => ({
      ...item,
      imt_kurus_ringan: item.total_imt_kurus_ringan,
      imt_kurus_berat: item.total_imt_kurus_berat,
      imt_normal: item.total_imt_normal,
      imt_gemuk_ringan: item.total_imt_gemuk_ringan,
      imt_obesitas: item.total_imt_gemuk_berat,
    })) || []),

    ...dummyData.map((item) => ({
      ...item,
      imt_kurus_ringan: item.total_imt_kurus_ringan,
      imt_kurus_berat: item.total_imt_kurus_berat,
      imt_normal: item.total_imt_normal,
      imt_gemuk_ringan: item.total_imt_gemuk_ringan,
      imt_obesitas: item.total_imt_gemuk_berat,
    })),
  ];

  return (
    <Card className="w-full rounded-2xl bg-card/70 h-full">
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
              dataKey="updated_at"
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
