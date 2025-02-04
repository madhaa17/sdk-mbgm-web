import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface VisitorCardProps {
  title: string;
  count: number;
  bgColor: string;

  onDetailClick?: () => void;
}

const CardVisitor = ({
  title,
  count,
  bgColor,
  onDetailClick,
}: VisitorCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden ${bgColor} text-white p-4 min-h-[120px] cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={onDetailClick}>
      {/* Title */}
      <h3 className="text-sm font-semibold mb-2">{title}</h3>

      {/* Count */}
      <p className="text-4xl font-bold">{count}</p>

      {/* Detail Link */}
      <div className="absolute bottom-4 left-4 flex items-center text-sm">
        Detail
        <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </Card>
  );
};

export default CardVisitor;
