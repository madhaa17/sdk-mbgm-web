import React from "react";
import CardClinic from "./card-clinic";
import CardDashboard from "./card-dashboard";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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
          <div className="z-20 absolute w-[23dvw] h-[100dvh] py-4 pl-4">
            <div className="flex flex-col justify-between gap-5 h-full">
              <CardClinic />
            </div>
          </div>
          <div className="absolute z-20 bottom-4 left-[calc(23dvw+1rem)] right-4">
            <CardDashboard />
          </div>
          <Button
            onClick={() => onOpenChange(false)}
            variant={"destructive"}
            className="font-medium absolute z-20 top-4 left-[calc(23dvw+1rem)] rounded-full h-10 w-10">
            <X className="h-4 w-4" />
          </Button>
        </>
      )}
    </>
  );
};

export default VisualDataSchool;
