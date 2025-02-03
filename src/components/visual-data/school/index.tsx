import React from "react";
import ModalSchool from "./card-school";
import CardAllergy from "./card-allergy";
import ChartImt from "./chart-imt";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { school } from "@/models/school";

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
  const { data, isLoading } = useQuery({
    queryKey: ["school", item],
    queryFn: () => school.getDetail(item),
    enabled: !!item, // Only run the query when item is available
  });

  return (
    <>
      {open && (
        <>
          {isLoading ? (
            <div className="fixed z-20 top-4 left-5 h-[calc(100%-3rem)] w-[438px] flex items-center justify-center">
              <span>Loading...</span>{" "}
            </div>
          ) : (
            data && (
              <>
                <div className="fixed z-20 top-4 left-5 h-[calc(100%-3rem)] w-[438px]">
                  <div className="flex flex-col justify-between gap-5 h-full">
                    <ModalSchool />
                    <CardAllergy />
                  </div>
                </div>
                <Button
                  onClick={() => onOpenChange(false)}
                  variant={"destructive"}
                  className="font-medium fixed z-20 top-4 left-[25%] ">
                  <X className="h-4 w-4" />
                </Button>
                <div className="fixed z-20 !bottom-5 right-5 h-[calc(50%-13.4rem)] w-[74%] ">
                  <ChartImt />
                </div>
              </>
            )
          )}
        </>
      )}
    </>
  );
};

export default VisualDataSchool;
