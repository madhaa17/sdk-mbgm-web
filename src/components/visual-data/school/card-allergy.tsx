import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AllergiesType } from "@/type";

const CardAllergy = ({ data }: { data: AllergiesType[] }) => {
  const dataItem = data?.[0];

  const animalProteinTotal =
    dataItem?.total_b_a1_egg +
    dataItem?.total_b_a1_cow_milk +
    dataItem?.total_b_a1_red_meat +
    dataItem?.total_b_a1_seafood;

  const plantProteinTotal =
    dataItem?.total_b_a2_fruit +
    dataItem?.total_b_a2_vegetable +
    dataItem?.total_b_a2_latex;

  const spicesTotal = dataItem?.total_b_a3_sesame + dataItem?.total_b_a3_spice;

  const additiveTotal =
    dataItem?.total_b_a4_food_coloring +
    dataItem?.total_b_a4_food_preservative +
    dataItem?.total_b_a4_artificial_flavoring;

  const processedTotal =
    dataItem?.total_b_a5_chocolate +
    dataItem?.total_b_a5_instant_food +
    dataItem?.total_b_a5_wheat;

  const vegetarian = dataItem?.total_b_vegan;

  const calculatePercentage = (value: number) => {
    const total = dataItem?.total_student ?? 0;
    return ((value / total) * 100).toFixed(2);
  };

  const categories = [
    {
      name: "Alergi Protein Hewani",
      value: calculatePercentage(animalProteinTotal),
      detail: [
        { name: "Alergi Telur", value: dataItem?.total_b_a1_egg },
        { name: "Alergi Susu", value: dataItem?.total_b_a1_cow_milk },
        { name: "Alergi Seafood", value: dataItem?.total_b_a1_seafood },
        { name: "Alergi Daging", value: dataItem?.total_b_a1_red_meat },
      ],
    },
    {
      name: "Alergi Protein Nabati",
      value: calculatePercentage(plantProteinTotal),
      detail: [
        { name: "Alergi Buah", value: dataItem?.total_b_a2_fruit },
        { name: "Alergi Latex", value: dataItem?.total_b_a2_latex },
        { name: "Alergi Sayur", value: dataItem?.total_b_a2_vegetable },
      ],
    },
    {
      name: "Alergi Rempah",
      value: calculatePercentage(spicesTotal),
      detail: [
        { name: "Alergi Kacang-kacangan", value: dataItem?.total_b_a3_sesame },
        { name: "Alergi Bumbu", value: dataItem?.total_b_a3_spice },
      ],
    },
    {
      name: "Alergi Tambahan Pangan",
      value: calculatePercentage(additiveTotal),
      detail: [
        {
          name: "Alergi Pewarna Makanan",
          value: dataItem?.total_b_a4_food_coloring,
        },
        {
          name: "Alergi Pengawet Makanan",
          value: dataItem?.total_b_a4_food_preservative,
        },
        {
          name: "Alergi Perasa Buatan",
          value: dataItem?.total_b_a4_artificial_flavoring,
        },
      ],
    },
    {
      name: "Alergi Makanan Olahan",
      value: calculatePercentage(processedTotal),
      detail: [
        { name: "Alergi Roti & Kue", value: dataItem?.total_b_a5_wheat },
        { name: "Alergi Cokelat", value: dataItem?.total_b_a5_chocolate },
        {
          name: "Alergi Makanan Instan",
          value: dataItem?.total_b_a5_instant_food,
        },
      ],
    },
    {
      name: "Vegan",
      value: calculatePercentage(vegetarian),
      detail: [{ name: "Vegan", value: dataItem?.total_b_vegan }],
    },
  ];

  return (
    <Card className="rounded-2xl bg-card/70 h-full">
      <CardContent className="flex flex-col justify-between h-full p-6">
        {categories.map((category, index) => (
          // bar chart
          <div key={index} className="flex items-center justify-between">
            <div className="text-sm font-medium">{category.name}</div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-1/2 h-4 bg-muted overflow-hidden">
                    <div
                      className="h-full bg-chart-3"
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
