import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTotal } from "@/stores/useTotal";

const CardTotalKitchen = () => {
  const { totalKitchen } = useTotal();
  return (
    <Card className="bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>Total Dapur</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">{totalKitchen}</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalKitchen;
