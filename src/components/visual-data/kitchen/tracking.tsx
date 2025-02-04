import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { KitchenBatchType, KitchenDetail } from "@/type";
import { useState } from "react";
import { formatTime } from "@/lib/utils";
import clsx from "clsx";

const MealProcessCard = ({ data }: { data: KitchenDetail }) => {
  const [selectedBatch, setSelectedBatch] = useState<
    KitchenBatchType | undefined
  >(undefined);

  const handleBatchChange = (batchName: string) => {
    const selected = data.kitchen_batchs.find(
      (batch) => batch.batch_name === batchName
    );
    setSelectedBatch(selected as any);
  };

  return (
    <Card className="rounded-2xl p-4 w-full bg-card/70 h-[225px]">
      <CardContent className="flex justify-between gap-4 ">
        {/* Dropdown */}
        <div className="flex flex-col justify-between w-fit gap-2">
          <div className="flex items-center gap-4">
            <Select onValueChange={handleBatchChange}>
              <SelectTrigger className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                <SelectValue
                  placeholder={
                    selectedBatch ? selectedBatch.batch_name : "Select Batch"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {data.kitchen_batchs.map((batch) => (
                  <SelectItem key={batch.id} value={batch.batch_name}>
                    {batch.batch_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Nutrisi Section */}
          {selectedBatch && (
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Karbohidrat</div> <div>: {selectedBatch.menu_karbo}</div>
              <div>Protein</div> <div>: {selectedBatch.menu_protein}</div>
              <div>Sayur / Serat</div> <div>: {selectedBatch.menu_serat}</div>
              <div>Vitamin</div> <div>: {selectedBatch.menu_vitamin}</div>
              <div>Mineral</div> <div>: {selectedBatch.menu_mineral}</div>
            </div>
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
                  selectedBatch?.step_pemorsian_a3
                    ? "bg-primary" // Selesai
                    : selectedBatch?.step_pemorsian_a1 ||
                      selectedBatch?.step_pemorsian_a2
                    ? "bg-green-500" // Saat ini
                    : "bg-green-500" // Berikutnya
                )}>
                1
              </div>
            </div>
            <p className="text-sm font-semibold">PROSES PERSIAPAN</p>
            <p className="text-xs text-gray-400">
              {formatTime(selectedBatch?.pemorsian_start_at ?? "")} -{" "}
              {formatTime(selectedBatch?.pemorsian_end_at ?? "")}
            </p>
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_pemorsian_a1} />{" "}
                Pemorsian Bahan Makan
              </li>
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_pemorsian_a2} /> Proses
                Masak
              </li>
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_pemorsian_a3} />{" "}
                Pemorsian tiap Siswa
              </li>
            </ul>
          </div>

          {/* Proses Distribusi */}
          <div className="flex flex-col items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full mb-2 flex items-center justify-center text-white",
                selectedBatch?.step_distribusi_b2
                  ? "bg-primary" // Selesai
                  : selectedBatch?.step_distribusi_b1 ||
                    selectedBatch?.step_pemorsian_a3
                  ? "bg-green-500" // Saat ini
                  : "bg-yellow-500" // Berikutnya
              )}>
              2
            </div>
            <p className="text-sm font-semibold">PROSES DISTRIBUSI</p>
            <p className="text-xs text-gray-400">
              {formatTime(selectedBatch?.distribusi_start_at ?? "")} -{" "}
              {formatTime(selectedBatch?.distribusi_end_at ?? "")}
            </p>
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_distribusi_b1} />{" "}
                Pembagian
              </li>
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_distribusi_b2} />{" "}
                Pengembalian
              </li>
            </ul>
          </div>

          {/* Proses Akhir */}
          <div className="flex flex-col items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full mb-2 flex items-center justify-center text-white",
                selectedBatch?.step_akhir_c2
                  ? "bg-primary" // Selesai
                  : selectedBatch?.step_akhir_c1 ||
                    selectedBatch?.step_distribusi_b2
                  ? "bg-green-500" // Saat ini
                  : "bg-yellow-500" // Berikutnya
              )}>
              3
            </div>
            <p className="text-sm font-semibold">PROSES AKHIR</p>
            <p className="text-xs text-gray-400">
              {formatTime(selectedBatch?.akhir_start_at ?? "")} -{" "}
              {formatTime(selectedBatch?.akhir_end_at ?? "")}
            </p>
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_akhir_c1} /> Pencucian
                Alat Makan
              </li>
              <li className="flex items-center gap-2">
                <Checkbox checked={!!selectedBatch?.step_akhir_c2} /> Report
                Harian
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealProcessCard;
