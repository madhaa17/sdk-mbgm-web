import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { allergy } from "@/models/allergy";
import { useQuery } from "@tanstack/react-query";
import { useTotal } from "@/stores/useTotal";
import Loader from "@/components/loader";

const AllergyPieChart = () => {
  const { setTotalStudent, totalStudent, setStudentMale, setStudentFemale } =
    useTotal();

  const { data, isLoading } = useQuery({
    queryKey: ["allergy"],
    queryFn: () =>
      allergy.get().then((res) => {
        if (res) {
          setTotalStudent(res[0].total_student);
          setStudentMale(res[0].total_student_male);
          setStudentFemale(res[0].total_student_female);
        }

        return res;
      }),
  });

  const dataItem = data?.[0];

  const animalProteinTotal =
    (dataItem?.total_b_a1_egg ?? 0) +
    (dataItem?.total_b_a1_cow_milk ?? 0) +
    (dataItem?.total_b_a1_red_meat ?? 0) +
    (dataItem?.total_b_a1_seafood ?? 0);

  const plantProteinTotal =
    (dataItem?.total_b_a2_fruit ?? 0) +
    (dataItem?.total_b_a2_vegetable ?? 0) +
    (dataItem?.total_b_a2_latex ?? 0);

  const spicesTotal =
    (dataItem?.total_b_a3_sesame ?? 0) + (dataItem?.total_b_a3_spice ?? 0);

  const additiveTotal =
    (dataItem?.total_b_a4_food_coloring ?? 0) +
    (dataItem?.total_b_a4_food_preservative ?? 0) +
    (dataItem?.total_b_a4_artificial_flavoring ?? 0);

  const processedTotal =
    (dataItem?.total_b_a5_chocolate ?? 0) +
    (dataItem?.total_b_a5_instant_food ?? 0) +
    (dataItem?.total_b_a5_wheat ?? 0);

  const vegetarian = dataItem?.total_b_vegan ?? 0;

  const calculatePercentage = (value: number) => {
    if (!totalStudent || totalStudent === 0) return 0;
    return ((value / totalStudent) * 100).toFixed(2);
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
      <Loader showLoader={isLoading} />
    </Card>
  );
};

export default AllergyPieChart;
