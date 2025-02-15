import React from "react";
import ModalSchool from "./card-school";
import CardAllergy from "./card-allergy";
import ChartImt from "./chart-imt";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { school } from "@/models/school";
import toast from "react-hot-toast";
import { schoolDetail } from "@/type";

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
  const { data } = useQuery({
    queryKey: ["school", item],
    queryFn: () =>
      school
        .getDetail(item)
        .catch(() => toast.error("Informasi tidak tersedia!")),
    enabled: !!item,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {open && (
        <>
          {data && (
            <>
              <div className="z-20 absolute w-[23dvw] h-[100dvh] py-4 pl-4">
                <div className="flex flex-col justify-between gap-4 h-full">
                  <ModalSchool data={data as schoolDetail} />
                  <CardAllergy data={data as schoolDetail} />
                </div>
              </div>

              <div className="absolute z-20 bottom-4 left-[calc(23dvw+1rem)] right-4 h-[25%]">
                <ChartImt data={data as schoolDetail} />
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
      )}
    </>
  );
};

export default VisualDataSchool;
