import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { KitchenBatchType, MenuType } from "@/type";
import { useState } from "react";
import { formatTime } from "@/lib/utils";
import clsx from "clsx";

const MealProcessCard = ({ data }: { data: MenuType[] }) => {
  const [selectedBatch, setSelectedBatch] = useState<MenuType | undefined>(
    undefined
  );

  const handleBatchChange = (requiredBy: string) => {
    const selected = data.find((batch) => batch.required_by === requiredBy);
    setSelectedBatch(selected);
  };

  return (
    <Card className="rounded-2xl p-4 w-full bg-card/70">
      <CardContent className="flex justify-between gap-4 ">
        {/* Dropdown */}
        <div className="flex flex-col justify-between gap-2 w-[30%]">
          <div className="flex items-center gap-4">
            <Select onValueChange={handleBatchChange}>
              <SelectTrigger className="bg-muted border px-4 py-2 rounded-lg">
                <SelectValue
                  placeholder={
                    selectedBatch ? selectedBatch.required_by : "Select Batch"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {data.map((batch) => (
                  <SelectItem key={batch.menu_id} value={batch.required_by}>
                    {batch.required_by}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Nutrisi Section */}
          {selectedBatch && (
            <div className="w-full">Menu: {selectedBatch.menu_name}</div>
          )}
        </div>

        {/* Timeline */}
        <div className="flex justify-between items-start gap-4 mt-4 w-[70%]">
          {/* Proses Persiapan */}
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center">
              <div
                className={clsx(
                  "w-8 h-8 rounded-full mb-2 flex items-center justify-center text-white",
                  selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                    ? "bg-primary"
                    : "bg-yellow-500"
                )}>
                1
              </div>
            </div>
            <p className="text-sm font-semibold">PROSES PERSIAPAN</p>
            {/* <p className="text-xs text-white"> */}
            {/* {formatTime(selectedBatch?.pemorsian_start_at ?? "")} -{" "}
              {formatTime(selectedBatch?.pemorsian_end_at ?? "")} */}
            {/* {selectedBatch?.required_by ?? "-"} */}
            {/* </p> */}
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Pemorsian Bahan Makan
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Proses Masak
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Pemorsian tiap Siswa
              </li>
            </ul>
          </div>

          {/* Proses Distribusi */}
          <div className="flex flex-col items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full mb-2 flex items-center justify-center text-white",
                selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                  selectedBatch?.menu_id === "MNU-02-2025-00005"
                  ? "bg-primary"
                  : "bg-orange-500"
              )}>
              2
            </div>
            <p className="text-sm font-semibold">PROSES DISTRIBUSI</p>
            {/* <p className="text-xs text-white">
              {formatTime(selectedBatch?.distribusi_start_at ?? "")} -{" "}
              {formatTime(selectedBatch?.distribusi_end_at ?? "")}
            </p> */}
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Pembagian
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Pengembalian
              </li>
            </ul>
          </div>

          {/* Proses Akhir */}
          <div className="flex flex-col items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full mb-2 flex items-center justify-center text-white",
                selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                  selectedBatch?.menu_id === "MNU-02-2025-00005"
                  ? "bg-primary"
                  : "bg-orange-500"
              )}>
              3
            </div>
            <p className="text-sm font-semibold">PROSES AKHIR</p>
            {/* <p className="text-xs text-white">
              {formatTime(selectedBatch?.akhir_start_at ?? "")} -{" "}
              {formatTime(selectedBatch?.akhir_end_at ?? "")}
            </p> */}
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Pencucian Alat Makan
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  checked={
                    selectedBatch?.menu_id === "MNU-02-2025-00004" ||
                    selectedBatch?.menu_id === "MNU-02-2025-00005"
                      ? true
                      : false
                  }
                />{" "}
                Report Harian
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealProcessCard;
