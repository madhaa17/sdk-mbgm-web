import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { KitchenDetail } from "@/type";

const CardKitchen = ({ data }: { data: KitchenDetail }) => {
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

        {/* <div className="flex items-center gap-2"> */}
        {/* <p>Rating: {data.kitchen_rating}/5 </p> */}
        {/* <Image
            className="mb-1"
            src={"/assets/icons/star.png"}
            width={14}
            height={16}
            alt="rating icon"
          /> */}
        {/* </div> */}

        <div className="space-y-3">
          <h2 className="font-medium text-xl">Kapasitas Dapur</h2>
          {/* <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Jumlah Porsi</div>{" "}
            <div>: {data.kitchen_capacity_food} Porsi</div>
            <div>Jumlah Siswa</div>{" "}
            <div>: {data.kitchen_capacity_student} Siswa</div>
            <div>Jumlah SKU</div> <div>: {data.kitchen_capacity_sku} SKU</div>
          </div> */}
        </div>

        <div className="space-y-3">
          <h2 className="font-medium text-xl">Daftar Sekolah</h2>
          {/* <div className="space-y-2">
            {data?.school_list?.map((school, idx) => {
              return <p key={idx}>{school.school_name}</p>;
            })}
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardKitchen;
