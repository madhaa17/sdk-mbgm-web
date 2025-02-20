import React from "react";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { useTabStore } from "@/stores/useTabStore";
import ThemeToggle from "./theme-toggle";
import Logout from "./logout";
const Search = ({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <Card className="fixed !z-[999] top-4 right-5 p-2 rounded-2xl flex gap-2">
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
      <ThemeToggle />
      <Logout />
    </Card>
  );
};

export default Search;
