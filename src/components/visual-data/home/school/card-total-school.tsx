import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardTotalSchool = () => {
  return (
    <Card className="rounded-2xl bg-card/70">
      <CardHeader>
        <CardTitle>Total Sekolah</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">3.334</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalSchool;
