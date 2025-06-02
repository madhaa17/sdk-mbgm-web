"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Search from "../search";

const Dashboard = () => {
  const employeeData = [
    {
      no: 1,
      name: "Default",
      percentage: 21,
      count: 5,
      color: "bg-[hsl(var(--chart-1))]",
    },
    {
      no: 2,
      name: "Harian",
      percentage: 17,
      count: 4,
      color: "bg-[hsl(var(--chart-2))]",
    },
    {
      no: 3,
      name: "Opr/Staff",
      percentage: 25,
      count: 6,
      color: "bg-[hsl(var(--chart-3))]",
    },
    {
      no: 4,
      name: "Foreman",
      percentage: 4,
      count: 1,
      color: "bg-[hsl(var(--chart-4))]",
    },
    {
      no: 5,
      name: "Supervisor",
      percentage: 0,
      count: 0,
      color: "bg-[hsl(var(--muted))]",
    },
    {
      no: 6,
      name: "Chief",
      percentage: 8,
      count: 2,
      color: "bg-[hsl(var(--chart-5))]",
    },
    {
      no: 7,
      name: "Mgr",
      percentage: 8,
      count: 2,
      color: "bg-[hsl(var(--chart-1))]",
    },
    {
      no: 8,
      name: "baru 5bln",
      percentage: 4,
      count: 1,
      color: "bg-[hsl(var(--chart-2))]",
    },
    {
      no: 9,
      name: "baru 1 th",
      percentage: 13,
      count: 3,
      color: "bg-[hsl(var(--chart-4))]",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Search handleChange={(e) => console.log(e)} disabled />

      <div className="px-6 pb-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card className="bg-gradient-to-br from-orange-400 to-orange-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Pinjaman Kredit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">
                    0 Transaksi Bulan Ini
                  </span>
                </div>
                <div className="text-2xl font-bold">20,368,000</div>
                <div className="text-sm opacity-90">Jml Tagihan Tahun Ini</div>
                <div className="text-xl font-semibold">9,302,000</div>
                <div className="text-sm opacity-90">Sisa Tagihan Tahun Ini</div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                  More info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Simpanan Juni 2025 */}
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Simpanan Juni 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Simpanan Anggota</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Penarikan Tunai</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Jumlah Simpanan</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                  More info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Kas Bulan Juni 2025 */}
          <Card className="bg-gradient-to-br from-violet-500 to-violet-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Kas Bulan Juni 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Debet</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Kredit</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Jumlah</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                  More info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Anggota */}
          <Card className="bg-gradient-to-br from-sky-500 to-sky-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Data Anggota
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">24 Anggota Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">1 Anggota Tidak Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">25 Jumlah Anggota</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                  More info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Peminjam */}
          <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Data Peminjam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">2 Peminjam</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 Sudah Lunas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">2 Belum Lunas</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                  More info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Pengguna */}
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Data Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">7 User Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 User Non-Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">7 Jumlah User</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                  More info
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employee Active Salary Table */}
        <Card>
          <CardHeader className="bg-gradient-to-r from-slate-600 to-slate-700">
            <CardTitle className="text-white text-lg">
              Anggota Aktif Gaji Net
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Nama Kelompok
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Persentase
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {employeeData.map((item) => (
                    <tr key={item.no} className="hover:bg-muted/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-card-foreground">
                        {item.no}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-card-foreground">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3 h-3 rounded-full inline-block ${item.color}`}
                          />
                          {item.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-card-foreground">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <Progress
                              value={item.percentage}
                              className={`h-2 ${item.color}`}
                            />
                          </div>
                          <span className="text-xs px-2 py-1 rounded bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]">
                            {item.percentage}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-card-foreground">
                        {item.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
