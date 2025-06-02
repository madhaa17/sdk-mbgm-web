import dynamic from "next/dynamic";
import { useTabStore } from "@/stores/useTabStore";
import Loader from "@/components/loader";
import withAuth from "@/components/hoc/with-auth";

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

const MapCooperative = dynamic(
  () => import("@/components/maps/map-cooperative"),
  {
    ssr: false,
    loading: () => <Loader showLoader={true} />,
  }
);

const Home = () => {
  const { activeTab } = useTabStore();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
      <>
        {activeTab === "school" && <MapSchool />}
        {activeTab === "kitchen" && <MapKitchen />}
        {activeTab === "clinic" && <MapClinic />}
        {activeTab === "cooperative" && <MapCooperative />}
      </>
    </main>
  );
};

export default withAuth(Home);
