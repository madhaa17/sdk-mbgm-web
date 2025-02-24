import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CardTotalPorsi = () => {
  return (
    <Card className="bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>Total Porsi</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">3.000</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalPorsi;
