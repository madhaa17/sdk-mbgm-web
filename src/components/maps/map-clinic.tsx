import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";

import React, { useCallback, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import VisualData from "../visual-data/clinic";
import { clinic } from "@/models/clinic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader";
import { debounce } from "lodash";
import Search from "../search";
import { useSearchParams } from "next/navigation";
import { parseCoordinates } from "@/lib/utils";
import { Button } from "../ui/button";
import VisualDataHomeClinic from "../visual-data/home/clinic";

const MapClinic = () => {
  const position = [-2.5489, 118.0149];

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<any>(null);
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const limitParams = searchParams.get("limit");

  const { data, isLoading } = useQuery({
    queryKey: ["clinics", query, limitParams],
    queryFn: () => clinic.get(query, limitParams || ""),
    refetchOnWindowFocus: false,
  });

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
                center={parseCoordinates(item.healthunit_coordinate)}
                radius={10}
                color={"green"}
                fillColor={"green"}>
                <Popup>
                  <div className="text-primary-foreground">
                    <p>{item.healthunit_name}</p>
                    <p>{item.healthunit_address}</p>
                  </div>
                  <Button
                    onClick={() => handleMarkerClick(item)}
                    className="w-full">
                    Detail Info
                  </Button>
                </Popup>
              </CircleMarker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
      <VisualData onOpenChange={handleClose} open={open} item={item} />
      {open ? <></> : <VisualDataHomeClinic />}
      <Search handleChange={handleSearchChange} />
      <Loader showLoader={isLoading} />
    </>
  );
};

export default MapClinic;
