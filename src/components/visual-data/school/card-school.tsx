import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label, Pie, PieChart, Legend, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { schoolDetail } from "@/type";

const CardSchool = ({ data }: { data: schoolDetail }) => {
  const total_students = 1100;
  const total_male = Number(data.total_male);
  const total_female = Number(data.total_female);

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ];

  const imt_data = [
    {
      name: "Kurus Ringan",
      value: Number(data.imt_kurus_ringan),
    },
    {
      name: "Kurus Berat",
      value: Number(data.imt_kurus_berat),
    },
    {
      name: "Normal",
      value: Number(data.imt_normal),
    },
    {
      name: "Gemuk Ringan",
      value: Number(data.imt_gemuk_ringan),
    },
    {
      name: "Obesitas",
      value: Number(data.imt_obesitas),
    },
  ];

  const chartConfig = {
    total: {
      label: "Total",
    },
    kurus_ringan: {
      label: "Kurus Ringan",
      color: "hsl(var(--chart-1))",
    },
    kurus_berat: {
      label: "Kurus Berat",
      color: "hsl(var(--chart-2))",
    },
    normal: {
      label: "Normal",
      color: "hsl(var(--chart-3))",
    },
    gemuk_ringan: {
      label: "Gemuk Ringan",
      color: "hsl(var(--chart-4))",
    },
    obesitas: {
      label: "Obesitas",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="rounded-2xl bg-card/70 h-[67vh] box-border">
      <CardHeader>
        <CardTitle>{data.school_name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        <div className="space-y-1">
          <p>NPSN: {data.school_npsn}</p>
          <p>{data.school_category}</p>
          <p>{data.school_address}</p>
          <p>{data.school_phone}</p>
        </div>

        <div className="space-y-2">
          <p> Total: {data.total_student} Siswa</p>
          <div className="w-full space-y-1">
            <div className="w-full h-5 border flex">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${(total_male / total_students) * 100}%`,
                }}></div>
              <div
                className="h-full bg-primary-foreground"
                style={{
                  width: `${(total_female / total_students) * 100}%`,
                }}></div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <p>Siswa: {total_male}</p>
              <p>Siswi: {total_female}</p>
            </div>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="aspect-video">
          <PieChart width={400} height={300}>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
            />
            <Pie
              data={imt_data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value">
              {imt_data.map((entry, index) => (
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
                        className="fill-primary-foreground text-3xl font-bold">
                        {data.total_student}
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 24}
                        className="fill-primary-foreground">
                        Total
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

export default CardSchool;
