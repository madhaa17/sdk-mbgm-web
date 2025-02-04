import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CardVisitor from "@/components/card-visitor";
import Image from "next/image";
import TimeCard from "@/components/card-time";

const CardDashboard = () => {
  return (
    <Card className="w-full rounded-2xl bg-card/70 h-full">
      <CardContent className="py-4 space-y-2">
        <div className="grid grid-cols-6 gap-2">
          <CardVisitor title="Pengunjung IGD" bgColor="bg-blue-500" count={0} />
          <CardVisitor
            title="Pengunjung Persalinan"
            bgColor="bg-yellow-500"
            count={0}
          />
          <CardVisitor
            title="Pengunjung Radiologi"
            bgColor="bg-orange-500"
            count={0}
          />
          <CardVisitor
            title="Pengunjung Rawat Jalan"
            bgColor="bg-red-500"
            count={0}
          />
          <CardVisitor
            title="Pengunjung Lab Klinik"
            bgColor="bg-purple-500"
            count={0}
          />
          <CardVisitor title="Total Pasien" bgColor="bg-gray-500" count={0} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <TimeCard
              bgColor="bg-blue-700"
              title="Rata-Rata Waktu Tunggu Skrining"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
            <TimeCard
              bgColor="bg-purple-700"
              title="Rata-Rata Waktu Tunggu Farmasi"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
            <TimeCard
              bgColor="bg-pink-700"
              title="Rata-Rata Waktu Tunggu Poli"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
            <TimeCard
              bgColor="bg-red-700"
              title="Rata-Rata Waktu Tunggu Farmasi"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <TimeCard
              bgColor="bg-yellow-600"
              title="Rata-Rata Waktu Layan Skrinning"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
            <TimeCard
              bgColor="bg-green-700"
              title="Rata-Rata Waktu Layan Farmasi"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
            <TimeCard
              bgColor="bg-orange-700"
              title="Rata-Rata Waktu Layan Poli"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
            <TimeCard
              bgColor="bg-red-700"
              title="Rata-Rata Waktu Layan Klinik"
              time="00:00:00"
              icon={
                <Image
                  src={"/assets/icons/2.png"}
                  alt="icon"
                  width={100}
                  height={100}
                />
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;
