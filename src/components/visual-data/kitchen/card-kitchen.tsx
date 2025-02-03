import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const schoolData = {
  school_name: "SEKOLAH MUHAMMADIYAH DARUL ARQAM (SMP / SMA) GARUT",
  school_npsn: "1234567890",
  school_category: "Negeri",
  school_type: "SD",
  school_address: "Jl. Merdeka No.1, Jakarta",
  school_province: "DKI Jakarta",
  school_city: "Jakarta Pusat",
  school_district: "Gambir",
  school_subdistrict: "Merdeka",
  school_telp: "+6221-12345678",
  school_email: "sd01@jakarta.sch.id",
};

const CardKitchen = () => {
  return (
    <Card className="w-full h-full bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>DAPUR MUHAMMADIYAH DARUL ARQAM</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <p>{schoolData.school_address}</p>
          <p>{schoolData.school_email}</p>
          <p>{schoolData.school_telp}</p>
        </div>

        <div className="flex gap-1">
          <Image
            src="/assets/images/image-1.png"
            alt="image-1"
            width={150}
            height={115}
          />
          <Image
            src="/assets/images/image-2.png"
            alt="image-1"
            width={150}
            height={115}
          />
        </div>

        <div className="space-y-3">
          <h2 className="font-medium text-xl">Kapasitas Dapur</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Jumlah Porsi</div> <div>: 3000 Porsi</div>
            <div>Jumlah Siswa</div> <div>: 3000 Siswa</div>
            <div>Jumlah SKU</div> <div>: 100 SKU</div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-medium text-xl">Daftar Sekolah</h2>
          <div className="space-y-2">
            <p>
              Sekolah Muhammadiyah Darul Arqam (SD) 1000 Siswa - Jl. Darul Arqam
            </p>
            <p>
              Sekolah Muhammadiyah Darul Arqam (SD) 1000 Siswa - Jl. Darul Arqam
            </p>
            <p>
              Sekolah Muhammadiyah Darul Arqam (SD) 1000 Siswa - Jl. Darul Arqam
            </p>
            <p>
              Sekolah Muhammadiyah Darul Arqam (SD) 1000 Siswa - Jl. Darul Arqam
            </p>
            <p>
              Sekolah Muhammadiyah Darul Arqam (SD) 1000 Siswa - Jl. Darul Arqam
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardKitchen;
