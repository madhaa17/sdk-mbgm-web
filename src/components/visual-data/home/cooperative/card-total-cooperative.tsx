import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { dummyCooperatives } from "@/lib/dummy";

const CardTotalClinic = () => {
  return (
    <Card className="bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>Total Koperasi</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">
          {dummyCooperatives.length}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardTotalClinic;
