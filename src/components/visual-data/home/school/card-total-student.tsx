import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardTotalStudent = () => {
  return (
    <Card className="rounded-2xl bg-card/70">
      <CardHeader>
        <CardTitle>Total Siswa</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">1.054.000</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalStudent;
