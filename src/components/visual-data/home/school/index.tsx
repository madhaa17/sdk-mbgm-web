import React from "react";
import CardTotalStudent from "./card-total-student";
import CardTotalSchool from "./card-total-school";
import GenderPieChart from "./gender-pie-chart";
import AllergyPieChart from "./allergy-pie-chart";
import ImtChart from "./imt_chart";

const VisualDataHome = () => {
  return (
    <>
      <div className="absolute z-20 top-4 left-4 w-[24%] flex flex-col gap-3">
        <CardTotalSchool />
        <CardTotalStudent />
        <GenderPieChart />
      </div>
      <div className="absolute z-20 bottom-4 items-stretch left-4 right-4 gap-4 h-[calc(100dvh-72%)] flex justify-between">
        <div className="w-[32.5%]">
          <AllergyPieChart />
        </div>
        <ImtChart />
      </div>
    </>
  );
};

export default VisualDataHome;
