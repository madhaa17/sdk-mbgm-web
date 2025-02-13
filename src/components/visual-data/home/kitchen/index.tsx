import React from "react";
import CardInfo from "./card-total-kitchen";
import CardStatusKitchen from "./card-status-kitchen";
import CardTotalPorsi from "./card-total-porsi";

const VisualDataHomeKitchen = () => {
  return (
    <>
      <div className="absolute z-20 top-4 left-4 w-[24%] flex flex-col gap-3">
        <CardInfo />
        <CardTotalPorsi />
        <CardStatusKitchen />
      </div>
    </>
  );
};

export default VisualDataHomeKitchen;
