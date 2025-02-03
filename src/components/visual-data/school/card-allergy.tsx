import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const data = {
  student_total: 1100,
  total_a1_egg: 250,
  total_a1_cow_milk: 200,
  total_a1_seafood: 150,
  total_a1_red_meat: 100,
  total_a2_fruit: 10,
  total_a2_vegetable: 5,
  total_a2_latex_fruit: 10,
  total_a3_sesame: 25,
  total_a3_herbs_spices: 30,
  total_a4_food_color: 15,
  total_a4_food_preservative: 25,
  total_a4_artificial_flavors: 10,
  total_a5_chocolate: 20,
  total_a5_breads_cakes: 120,
  total_a5_food_instant: 60,
  total_vegan: 70,
};

const CardAllergy = () => {
  // Calculate totals for each category
  const animalProteinTotal =
    data.total_a1_egg +
    data.total_a1_cow_milk +
    data.total_a1_seafood +
    data.total_a1_red_meat;

  const plantProteinTotal =
    data.total_a2_fruit + data.total_a2_vegetable + data.total_a2_latex_fruit;

  const spicesTotal = data.total_a3_sesame + data.total_a3_herbs_spices;

  const additiveTotal =
    data.total_a4_food_color +
    data.total_a4_food_preservative +
    data.total_a4_artificial_flavors;

  const processedTotal =
    data.total_a5_chocolate +
    data.total_a5_breads_cakes +
    data.total_a5_food_instant;

  // Calculate percentages
  const calculatePercentage = (value: number) =>
    (value / data.student_total) * 100;

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
    {
      name: "Vegan / Vegetarian",
      value: calculatePercentage(data.total_vegan),
    },
  ];

  return (
    <Card className="rounded-2xl bg-card/70 h-[253px]">
      <CardContent className="p-6 space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="text-sm font-medium">{category.name}</div>
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
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardAllergy;
