import dynamic from "next/dynamic";
import { useTabStore } from "@/stores/useTabStore";
import Loader from "@/components/loader";
import VisualDataHome from "@/components/visual-data/home/school";

const MapSchool = dynamic(() => import("@/components/maps/map-school"), {
  ssr: false,
  loading: () => <Loader showLoader={true} />,
});

const MapKitchen = dynamic(() => import("@/components/maps/map-kitchen"), {
  ssr: false,
  loading: () => <Loader showLoader={true} />,
});

const MapClinic = dynamic(() => import("@/components/maps/map-clinic"), {
  ssr: false,
  loading: () => <Loader showLoader={true} />,
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
