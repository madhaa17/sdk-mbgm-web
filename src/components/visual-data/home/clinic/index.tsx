import React from "react";
import CardClinic from "./card-clinic";
import CardTotalClinic from "./card-total-clinic";

const VisualDataHomeClinic = () => {
  return (
    <div className="z-20 absolute w-[23dvw] h-[100dvh] py-4 pl-4">
      <div className="flex flex-col justify-between gap-5">
        <CardTotalClinic />
        <CardClinic />
      </div>
    </div>
  );
};

export default VisualDataHomeClinic;
