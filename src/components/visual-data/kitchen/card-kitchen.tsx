import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { KitchenDetail, KitchenStock } from "@/type";

const CardKitchen = ({
  data,
  stock,
}: {
  data: KitchenDetail;
  stock: KitchenStock[];
}) => {
  return (
    <Card className="w-full h-full bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>{data.kitchen_name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <p>{data.kitchen_address}</p>
        </div>

        <div className="flex gap-1">
          <Image
            src={data.kitchen_image}
            alt="image-1"
            width={150}
            height={115}
          />
        </div>

        <div className="space-y-3">
          <h2 className="font-medium text-xl">Daftar Sekolah</h2>
          <div className="space-y-2">
            {data?.kitchen_schools?.map((school, idx) => {
              return (
                <p key={idx}>
                  {school.school_detail.school_name} - {school.max_portions}{" "}
                  Porsi
                </p>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-medium text-xl">Stok Dapur</h2>
          <div className="space-y-2">
            {stock?.slice(0, -1).map((item, idx) => (
              <p key={idx}>
                {item.item_group} - {item.item_name} {item.opening_qty}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardKitchen;
