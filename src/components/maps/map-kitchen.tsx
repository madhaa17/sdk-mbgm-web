import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";

import React, { useCallback, useState } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import VisualData from "../visual-data/kitchen";
import { parseCoordinates } from "@/lib/utils";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import Search from "../search";
import { kitchen } from "@/models/kitchen";
import Loader from "../loader";
import VisualDataHomeKitchen from "../visual-data/home/kitchen";

const MapKitchen = () => {
  const [query, setQuery] = useState("");

  const searchParams = useSearchParams();
  const limitParams = searchParams.get("limit");

  const { data, isLoading } = useQuery({
    queryKey: ["kitchens", query, limitParams],
    queryFn: () => kitchen.get(query, limitParams || ""),
    refetchOnWindowFocus: false,
  });

  const position = [-2.5489, 118.0149];
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<any>(null);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setQuery(value);
    }, 2000),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleOpen = (item: any) => {
    setItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setItem(null);
    setOpen(false);
  };

  const handleMarkerClick = (e: any) => {
    handleOpen(e);
  };

  return (
    <>
      <MapContainer
        // @ts-ignore
        center={position}
        zoom={5}
        zoomControl={false}
        className="markercluster-map"
        style={{ height: "100vh", width: "100%", zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          {data?.map((item) => {
            return (
              <CircleMarker
                key={item.id}
                center={parseCoordinates(item.kitchen_coordinate)}
                radius={10}
                color={"green"}
                fillColor={"green"}>
                <Popup>
                  <div className="text-primary-foreground">
                    <p>{item.kitchen_name}</p>
                    <p>{item.kitchen_address}</p>
                    <p>{item.kitchen_province}</p>
                  </div>
                  <Button
                    onClick={() => handleMarkerClick(item.id)}
                    className="w-full">
                    Detail Info
                  </Button>
                </Popup>
              </CircleMarker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
      <VisualData item={item} open={open} onOpenChange={handleClose} />
      {open ? <></> : <VisualDataHomeKitchen />}
      <Search handleChange={handleSearchChange} />
      <Loader showLoader={isLoading} />
    </>
  );
};

export default MapKitchen;
