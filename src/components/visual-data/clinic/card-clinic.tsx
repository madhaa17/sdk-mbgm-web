import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PercentageBar = ({
  segments,
}: {
  segments: { color: string; percentage: number }[];
}) => (
  <div className="flex items-center w-full overflow-hidden h-5">
    {segments.map((segment, idx) => (
      <div
        key={idx}
        className={`h-full ${segment.color}`}
        style={{ width: `${segment.percentage}%` }}
      />
    ))}
  </div>
);

const StatSection = ({
  title,
  data,
}: {
  title: string;
  data: { label: string; value: number; color: string }[];
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <>
      <h3 className="text-sm font-medium">{title}</h3>
      <PercentageBar
        segments={data.map((item) => ({
          color: item.color,
          percentage: (item.value / total) * 100,
        }))}
      />
      <div className="grid grid-cols-3 gap-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-3 h-3 ${item.color} rounded mr-2`} />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

const ClinicDashboard = ({ item }: { item: any }) => {
  const ageData = [
    { label: "Balita", value: 4, color: "bg-blue-500" },
    { label: "Kanak-kanak", value: 2, color: "bg-pink-500" },
    { label: "Remaja", value: 23, color: "bg-green-500" },
    { label: "Dewasa", value: 45, color: "bg-red-500" },
    { label: "Lansia", value: 1, color: "bg-yellow-500" },
    { label: "Manula", value: 1, color: "bg-emerald-500" },
    { label: "Lainnya", value: 4, color: "bg-cyan-500" },
  ];

  const complaintData = [
    { label: "Demam", value: 15, color: "bg-blue-500" },
    { label: "Batuk", value: 5, color: "bg-pink-500" },
    { label: "Gusi Bengkak", value: 4, color: "bg-green-500" },
  ];

  const visitData = [
    { label: "Budi", value: 10, color: "bg-blue-500" },
    { label: "Nisa", value: 8, color: "bg-pink-500" },
    { label: "Ika", value: 6, color: "bg-green-500" },
  ];

  const diagnosisData = [
    { label: "Asma", value: 12, color: "bg-blue-500" },
    { label: "Influenza", value: 8, color: "bg-pink-500" },
    { label: "Virus", value: 5, color: "bg-green-500" },
  ];

  const jobData = [
    { label: "Bidan", value: 1, color: "bg-blue-500" },
    { label: "Karyawan Swasta", value: 5, color: "bg-pink-500" },
    { label: "PNS", value: 2, color: "bg-green-500" },
  ];

  console.log({ item });

  return (
    <Card className="w-full bg-card/70 rounded-2xl h-full">
      <CardHeader>
        <CardTitle>{item?.healthunit_name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm">
          <p>{item?.healthunit_address}</p>
        </div>

        {item?.id === 24296 ? (
          <>
            <div className="space-y-2">
              <p> Total: {101} Pasien</p>
              <div className="w-full space-y-1">
                <div className="w-full h-5 border flex">
                  <div
                    className="h-full bg-primary"
                    style={{
                      width: `${(48 / 101) * 100}%`,
                    }}></div>
                  <div
                    className="h-full bg-[#FF0CA6]"
                    style={{
                      width: `${(53 / 101) * 100}%`,
                    }}></div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <p>Laki-laki: {48}</p>
                  <p>Perempuan: {53}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <StatSection title="Berdasarkan Umur" data={ageData} />
              <StatSection title="Berdasarkan Keluhan" data={complaintData} />
              <StatSection title="Berdasarkan Kunjungan" data={visitData} />
              <StatSection title="Berdasarkan Diagnosis" data={diagnosisData} />
              <StatSection title="Berdasarkan Pekerjaan" data={jobData} />
            </div>
          </>
        ) : (
          <>
            <p>Data tidak tersedia!</p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ClinicDashboard;
