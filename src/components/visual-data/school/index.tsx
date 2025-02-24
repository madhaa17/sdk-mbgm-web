import React from "react";
import ModalSchool from "./card-school";
import CardAllergy from "./card-allergy";
import ChartImt from "./chart-imt";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { school } from "@/models/school";
import toast from "react-hot-toast";
import { AllergiesType, ImtType, schoolDetail } from "@/type";
import { allergy } from "@/models/allergy";
import { imt } from "@/models/imt";

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
  const [total, setTotal] = React.useState({
    total_student: 0,
    total_male: 0,
    total_female: 0,
  });

  const { data } = useQuery({
    queryKey: ["school", item],
    queryFn: () =>
      school
        .getDetail(item)
        .then((res) => res)
        .catch(() => toast.error("Informasi tidak tersedia!")),
    enabled: !!item,
    refetchOnWindowFocus: false,
  });

  const { data: allergyData } = useQuery({
    queryKey: ["allergy-id", item],
    queryFn: () =>
      allergy.get(item).then((res) => {
        if (res) {
          setTotal({
            total_student: res[0].total_student,
            total_male: res[0].total_student_male,
            total_female: res[0].total_student_female,
          });
        }
        return res;
      }),
  });

  const { data: imtData } = useQuery({
    queryKey: ["imt-id", item],
    queryFn: () => imt.get(item),
  });

  return (
    <>
      {open && (
        <>
          {data && (
            <>
              <div className="z-20 absolute w-[23dvw] h-[100dvh] py-4 pl-4">
                <div className="flex flex-col justify-between gap-4 h-full">
                  <ModalSchool
                    data={data as schoolDetail}
                    totalStudent={total.total_student}
                    studentMale={total.total_male}
                    studentFemale={total.total_female}
                    imtData={imtData as ImtType[]}
                  />
                  <CardAllergy data={allergyData as AllergiesType[]} />
                </div>
              </div>

              <div className="absolute z-20 bottom-4 left-[calc(23dvw+1rem)] right-4 h-[25%]">
                <ChartImt data={imtData as ImtType[]} />
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
