import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label, Pie, PieChart, Legend } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const CardSchool = () => {
  const schoolData = {
    school_name: "SEKOLAH MUHAMMADIYAH DARUL ARQAM (SMP / SMA) GARUT",
    school_npsn: "1234567890",
    school_category: "Negeri",
    school_type: "SD",
    school_address: "Jl. Merdeka No.1, Jakarta",
    school_province: "DKI Jakarta",
    school_city: "Jakarta Pusat",
    school_district: "Gambir",
    school_subdistrict: "Merdeka",
    school_telp: "+6221-12345678",
    school_email: "sd01@jakarta.sch.id",
  };

  const total_students = 1100;
  const total_male = 550;
  const total_female = 550;

  const chartData = [
    { imt: "kurus ringan", total: 275, fill: "hsl(var(--chart-1))" },
    { imt: "kurus berat", total: 200, fill: "hsl(var(--chart-2))" },
    { imt: "normal", total: 262, fill: "hsl(var(--chart-3))" },
    { imt: "gemuk ringan", total: 173, fill: "hsl(var(--chart-4))" },
    { imt: "gemuk berat", total: 190, fill: "hsl(var(--chart-5))" },
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
    gemuk_berat: {
      label: "Gemuk Berat",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.total, 0);
  }, []);

  return (
    <Card className="rounded-2xl bg-card/70 h-[67vh] box-border">
      <CardHeader>
        <CardTitle>{schoolData.school_name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        <div className="space-y-1">
          <p>NPSN: {schoolData.school_npsn}</p>
          <p>{schoolData.school_address}</p>
          <p>{schoolData.school_email}</p>
          <p>{schoolData.school_telp}</p>
        </div>

        <div className="space-y-2">
          <p> Total: {total_students} Siswa/Siswi</p>
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
              <p>Siswa: {total_male} (50%)</p>
              <p>Siswi: {total_female} (50%)</p>
            </div>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="aspect-video">
          <PieChart>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="square"
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="imt"
              innerRadius={60}
              strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-primary-foreground text-3xl font-bold">
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-primary-foreground">
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CardSchool;
