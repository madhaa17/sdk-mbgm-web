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

  const vegetarian = Number(data?.b_vegan) || 0;

  const calculatePercentage = (value: number) =>
    ((value / totalStudents) * 100).toFixed(2);

  const categories = [
    {
      name: "Alergi Protein Hewani",
      value: calculatePercentage(animalProteinTotal),
      detail: [
        {
          name: "Alergi Telur",
          value: data.b_a1_egg,
        },
        {
          name: "Alergi Susu",
          value: data.b_a1_cow_milk,
        },
        {
          name: "Alergi Seafood",
          value: data.b_a1_seafood,
        },
        {
          name: "Alergi Daging",
          value: data.b_a1_red_meat,
        },
      ],
    },
    {
      name: "Alergi Protein Nabati",
      value: calculatePercentage(plantProteinTotal),
      detail: [
        {
          name: "Alergi Buah",
          value: data.b_a2_fruit,
        },
        {
          name: "Alergi Latex",
          value: data.b_a2_latex_fruit,
        },
        {
          name: "Alergi Sayur",
          value: data.b_a2_vegetable,
        },
      ],
    },
    {
      name: "Alergi Rempah",
      value: calculatePercentage(spicesTotal),
      detail: [
        {
          name: "Alergi Kacang-kacangan",
          value: data.b_a3_sesame,
        },
        {
          name: "Alergi Bumbu",
          value: data.b_a3_herbs_spices,
        },
      ],
    },
    {
      name: "Alergi Tambahan Pangan",
      value: calculatePercentage(additiveTotal),
      detail: [
        {
          name: "Alergi Pewarna Makanan",
          value: data.b_a4_food_color,
        },
        {
          name: "Alergi Pengawet Makanan",
          value: data.b_a4_food_preservative,
        },
        {
          name: "Alergi Perasa Buatan",
          value: data.b_a4_artificial_flavors,
        },
      ],
    },
    {
      name: "Alergi Makanan Olahan",
      value: calculatePercentage(processedTotal),
      detail: [
        {
          name: "Alergi Roti & Kue",
          value: data.b_a5_breads_cakes,
        },
        {
          name: "Alergi Cokelat",
          value: data.b_a5_chocolate,
        },
        {
          name: "Alergi Makanan Instan",
          value: data.b_a5_food_instant,
        },
      ],
    },

    {
      name: "Vegan",
      value: calculatePercentage(vegetarian),
      detail: [
        {
          name: "Vegan",
          value: data.b_vegan,
        },
      ],
    },
  ];

  return (
    <Card className="rounded-2xl bg-card/70 h-full">
      <CardContent className="p-6 space-y-3">
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
                <TooltipContent className="z-50 p-2 shadow-md rounded-md">
                  <div className="text-sm font-semibold">{category.name}</div>
                  {category.detail.map((detail, index) => (
                    <div key={index} className="text-sm">
                      {detail.name}: {detail.value}
                    </div>
                  ))}
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
