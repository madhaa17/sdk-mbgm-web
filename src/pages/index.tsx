import dynamic from "next/dynamic";
import { useTabStore } from "@/stores/useTabStore";

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
  const { activeTab } = useTabStore();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
      <>
        {activeTab === "school" && <MapSchool />}
        {activeTab === "kitchen" && <MapKitchen />}
        {activeTab === "clinic" && <MapClinic />}
      </>
    </main>
  );
}
