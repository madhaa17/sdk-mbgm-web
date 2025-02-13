import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label, Pie, PieChart, Legend, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const total_kitchen = 182;
const persiapan = 50;
const distribusi = 53;
const akhir = 2;

const COLORS = ["orange", "yellow", "green"];

const data = [
  {
    name: "Proses Persiapan",
    value: persiapan,
  },
  {
    name: "Proses Distribusi",
    value: distribusi,
  },
  {
    name: "Proses Akhir",
    value: akhir,
  },
];

const chartConfig = {
  total: {
    label: "Total",
  },
  proses_persiapan: {
    label: "Proses Persiapan",
    color: "orange",
  },
  proses_distribusi: {
    label: "Proses Distribusi",
    color: "yellow",
  },
  proses_akhir: {
    label: "Proses Akhir",
    color: "green",
  },
} satisfies ChartConfig;

const CardStatusKitchen = () => {
  return (
    <Card className="rounded-2xl bg-card/70 h-full">
      <CardHeader>
        <CardTitle>Status Dapur</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full">
          <PieChart className="w-full h-full">
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  // @ts-ignore
                  const { cx, cy } = viewBox;
                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={cx}
                        y={cy}
                        className="fill-primary-foreground text-xl font-bold">
                        {total_kitchen}
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 24}
                        className="fill-primary-foreground">
                        Dapur
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CardStatusKitchen;
