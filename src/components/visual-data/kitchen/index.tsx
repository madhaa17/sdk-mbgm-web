import React from "react";
import CardKitchen from "./card-kitchen";
import MealProcessCard from "./tracking";
import { useQuery } from "@tanstack/react-query";
import { kitchen } from "@/models/kitchen";
import toast from "react-hot-toast";

interface VisualDataProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  item?: any;
}

const VisualDataKitchen: React.FC<VisualDataProps> = ({
  open,
  onOpenChange,
  item,
}) => {
  const { data } = useQuery({
    queryKey: ["kitchen", item],
    queryFn: () =>
      kitchen
        .getDetail(item)
        .catch(() => toast.error("Detail info belum tersedia!")),
    enabled: !!item,
  });

  return (
    <>
      {open && (
        <>
          {data && (
            <>
              <div className="fixed z-20 top-4 left-5 h-[calc(100%-2rem)] w-[438px]">
                <div className="flex flex-col justify-between gap-5 h-full">
                  <CardKitchen data={data} />
                </div>
              </div>
              <div className="fixed z-20 !bottom-5 right-5 h-[calc(50%-13.4rem)] w-[74%] ">
                <MealProcessCard data={data} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default VisualDataKitchen;
