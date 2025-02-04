import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { schoolDetail } from "@/type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CardAllergy = ({ data }: { data: schoolDetail }) => {
  const totalStudents = Math.max(Number(data?.total_student) || 0, 1);

  const animalProteinTotal =
    (Number(data?.b_a1_egg) || 0) +
    (Number(data?.b_a1_cow_milk) || 0) +
    (Number(data?.b_a1_seafood) || 0) +
    (Number(data?.b_a1_red_meat) || 0);

  const plantProteinTotal =
    (Number(data?.b_a2_fruit) || 0) +
    (Number(data?.b_a2_vegetable) || 0) +
    (Number(data?.b_a2_latex_fruit) || 0);

  const spicesTotal =
    (Number(data?.b_a3_sesame) || 0) + (Number(data?.b_a3_herbs_spices) || 0);

  const additiveTotal =
    (Number(data?.b_a4_food_color) || 0) +
    (Number(data?.b_a4_food_preservative) || 0) +
    (Number(data?.b_a4_artificial_flavors) || 0);

  const processedTotal =
    (Number(data?.b_a5_chocolate) || 0) +
    (Number(data?.b_a5_breads_cakes) || 0) +
    (Number(data?.b_a5_food_instant) || 0);

  const calculatePercentage = (value: number) =>
    ((value / totalStudents) * 100).toFixed(2);

  const categories = [
    {
      name: "Alergi Protein Hewani",
      value: calculatePercentage(animalProteinTotal),
    },
    {
      name: "Alergi Protein Nabati",
      value: calculatePercentage(plantProteinTotal),
    },
    {
      name: "Alergi Rempah",
      value: calculatePercentage(spicesTotal),
    },
    {
      name: "Alergi Tambahan Pangan",
      value: calculatePercentage(additiveTotal),
    },
    {
      name: "Alergi Makanan Olahan",
      value: calculatePercentage(processedTotal),
    },
  ];

  return (
    <Card className="rounded-2xl bg-card/70 h-full">
      <CardContent className="p-6 space-y-4">
        {categories.map((category, index) => (
          // bar chart
          <div key={index} className="flex items-center justify-between">
            <div className="text-sm font-medium">{category.name}</div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-1/2 h-4 bg-muted overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width: `${category.value}%`,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="z-50">
                  <p>
                    {category.value}% dari {totalStudents} siswa {category.name}{" "}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardAllergy;
