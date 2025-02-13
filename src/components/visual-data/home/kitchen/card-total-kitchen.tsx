import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CardTotalKitchen = () => {
  return (
    <Card className="bg-card/70 rounded-2xl">
      <CardHeader>
        <CardTitle>Total Dapur</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">182</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalKitchen;
