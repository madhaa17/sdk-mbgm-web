import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const CardClinic = () => {
  return (
    <Card className="w-full h-full bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>KLINIK MUHAMMADIYAH DARUL ARQAM</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <p>{schoolData.school_address}</p>
          <p>{schoolData.school_email}</p>
          <p>{schoolData.school_telp}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardClinic;
