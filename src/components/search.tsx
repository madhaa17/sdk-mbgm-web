import React from "react";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { useTabStore } from "@/stores/useTabStore";

const Search = ({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { activeTab, setActiveTab } = useTabStore();

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
          className="w-full min-w-[300px]"
          onChange={handleChange}
        />
      </div>
    </Card>
  );
};

export default Search;
