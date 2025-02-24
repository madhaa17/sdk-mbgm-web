import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CardTotalClinic = () => {
  return (
    <Card className="bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>Total Klinik</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">1</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalClinic;
