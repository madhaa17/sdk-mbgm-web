import React from "react";
import { Card } from "@/components/ui/card";

interface TimeCardProps {
  title: string;
  time: string;
  bgColor: string;
  icon: React.ReactNode;
}

const TimeCard = ({ title, time, bgColor, icon }: TimeCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden ${bgColor} text-white p-4 min-h-[100px] rounded-xl`}>
      {/* Title */}
      <h3 className="text-sm font-semibold mb-2">{title}</h3>

      {/* Time */}
      <p className="text-3xl font-bold font-mono">{time}</p>

      {/* Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">{icon}</div>
    </Card>
  );
};

export default TimeCard;
