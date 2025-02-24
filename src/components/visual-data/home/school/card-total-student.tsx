import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTotal } from "@/stores/useTotal";

const CardTotalStudent = () => {
  const { totalStudent } = useTotal();

  return (
    <Card className="rounded-2xl bg-card/70">
      <CardHeader>
        <CardTitle>Total Siswa</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold font-mono">{totalStudent}</p>
      </CardContent>
    </Card>
  );
};

export default CardTotalStudent;
