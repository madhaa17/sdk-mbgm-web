import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label, Pie, PieChart, Legend, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const total_students = 1054000;
const total_male = 526550;
const total_female = 527450;

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

const data = [
  {
    name: "Laki-laki",
    value: total_male,
  },
  {
    name: "Perempuan",
    value: total_female,
  },
];

const chartConfig = {
  total: {
    label: "Total",
  },
  kurus_ringan: {
    label: "Laki-laki",
    color: "hsl(var(--chart-1))",
  },
  kurus_berat: {
    label: "Perempuan",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const GenderPieChart = () => {
  return (
    <Card className="rounded-2xl bg-card/70 h-full">
      <CardHeader>
        <CardTitle>Jenis Kelamin</CardTitle>
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
                        {total_students}
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 24}
                        className="fill-primary-foreground">
                        Pelajar
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

export default GenderPieChart;
