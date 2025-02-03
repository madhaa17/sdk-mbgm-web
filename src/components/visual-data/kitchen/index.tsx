import React from "react";
import CardKitchen from "./card-kitchen";
import MealProcessCard from "./tracking";

interface VisualDataProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  item?: any;
}

const VisualDataSchool: React.FC<VisualDataProps> = ({
  open,
  onOpenChange,
  item,
}) => {
  return (
    <>
      {open && (
        <>
          <div className="fixed z-20 top-4 left-5 h-[calc(100%-2rem)] w-[438px]">
            <div className="flex flex-col justify-between gap-5 h-full">
              <CardKitchen />
            </div>
          </div>
          <div className="fixed z-20 !bottom-5 right-5 h-[calc(50%-13.4rem)] w-[74%] ">
            <MealProcessCard />
          </div>
        </>
      )}
    </>
  );
};

export default VisualDataSchool;
