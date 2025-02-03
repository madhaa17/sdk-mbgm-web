import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const MealProcessCard = () => {
  return (
    <Card className="rounded-2xl p-4 w-full bg-card/70 h-[253px]">
      <CardContent className="flex justify-between gap-4 ">
        {/* Dropdown */}
        <div className="flex flex-col justify-between w-fit gap-2">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                <SelectValue placeholder="BATCH 1 - TK/PAUD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="batch1">BATCH 1 - TK/PAUD</SelectItem>
                <SelectItem value="batch2">BATCH 2 - SD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Nutrisi Section */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Karbohidrat</div> <div>: Nasi</div>
            <div>Protein</div> <div>: Ayam Kecap</div>
            <div>Sayur / Serat</div> <div>: Buncis</div>
            <div>Vitamin</div> <div>: Semangka</div>
            <div>Mineral</div> <div>: Susu</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex justify-between items-start gap-4 mt-4 w-[70%]">
          {/* Proses Persiapan */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mb-2"></div>
            <p className="text-sm font-semibold">PROSES PERSIAPAN</p>
            <p className="text-xs text-gray-400">05.00 - 12.00 WIB</p>
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox /> Pemorsian Bahan Makan
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Proses Masak
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Pemorsian tiap Siswa
              </li>
            </ul>
          </div>

          {/* Proses Distribusi */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-yellow-500 rounded-full mb-2"></div>
            <p className="text-sm font-semibold">PROSES DISTRIBUSI</p>
            <p className="text-xs text-gray-400">-</p>
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox /> Sekolah A - Lokasi A
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Sekolah B - Lokasi B
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Sekolah C - Lokasi C
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Sekolah D - Lokasi D
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Sekolah E - Lokasi E
              </li>
            </ul>
          </div>

          {/* Proses Akhir */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-yellow-500 rounded-full mb-2"></div>
            <p className="text-sm font-semibold">PROSES AKHIR</p>
            <p className="text-xs text-gray-400">-</p>
            <ul className="text-xs mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <Checkbox /> Pencucian Alat Makan
              </li>
              <li className="flex items-center gap-2">
                <Checkbox /> Report Harian
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealProcessCard;
