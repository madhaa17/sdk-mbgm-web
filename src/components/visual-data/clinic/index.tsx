import React from "react";
import CardClinic from "./card-clinic";

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
        <div className="fixed z-20 top-4 left-5 h-[calc(100%-2rem)] w-[438px]">
          <div className="flex flex-col justify-between gap-5 h-full">
            <CardClinic />
          </div>
        </div>
      )}
    </>
  );
};

export default VisualDataSchool;
