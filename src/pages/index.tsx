import dynamic from "next/dynamic";
import { useTabStore } from "@/stores/useTabStore";
import { useQuery } from "@tanstack/react-query";
import { school } from "@/models/school";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { SchoolList } from "@/type";
// import { useState, useEffect, useMemo } from "react";

const MapSchool = dynamic(() => import("@/components/maps/map-school"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const MapKitchen = dynamic(() => import("@/components/maps/map-kitchen"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const MapClinic = dynamic(() => import("@/components/maps/map-clinic"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const { activeTab, setActiveTab } = useTabStore();

  const { data: schools, isLoading: schoolsLoading } = useQuery({
    queryKey: ["schools"],
    queryFn: () => school.get(),
  });

  const Search = () => {
    return (
      <Card className="fixed !z-[999] top-4 right-5 w-fit p-2 rounded-2xl">
        <div className="flex gap-4 w-full justify-between">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger className="w-full" value="school">
                Sekolah
              </TabsTrigger>
              <TabsTrigger className="w-full" value="kitchen">
                Dapur
              </TabsTrigger>
              <TabsTrigger className="w-full" value="clinic">
                Klinik
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Input
            placeholder="Cari lokasi..."
            className="w-[300px]"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Card>
    );
  };

  if (schoolsLoading) {
    return <p>Loading...</p>;
  }
  console.log({ schools });

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
      <>
        {activeTab === "school" && <MapSchool data={schools as SchoolList[]} />}
        {activeTab === "kitchen" && <MapKitchen />}
        {activeTab === "clinic" && <MapClinic />}
        <Search />
      </>
    </main>
  );
}
