import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";

import React, { useCallback, useState } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import VisualData from "../visual-data/school";
import { parseCoordinates } from "@/lib/utils";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { school } from "@/models/school";
import { debounce } from "lodash";
import Search from "../search";

const getMarkerColor = (totalImtNormalPct: number) => {
  if (totalImtNormalPct <= 0.5) {
    return "red";
  } else if (totalImtNormalPct > 0.5 && totalImtNormalPct <= 0.7) {
    return "orange";
  } else {
    return "green";
  }
};

const MapSchool = () => {
  const [query, setQuery] = useState("");

  const searchParams = useSearchParams();
  const limitParams = searchParams.get("limit");

  const { data: schools, isLoading: schoolsLoading } = useQuery({
    queryKey: ["schools", query, limitParams],
    queryFn: () => school.get(query, limitParams || ""),
  });

  const position = [-2.5489, 118.0149];
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<any>(null);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setQuery(value);
    }, 3000),
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
          {schools?.map((item) => {
            let label;
            const imtPct = parseInt(item.imt_pct);

            if (imtPct <= 0.5) {
              label = "BAD";
            } else if (imtPct > 0.5 && imtPct <= 0.7) {
              label = "NORMAL";
            } else {
              label = "GOOD";
            }

            const color = getMarkerColor(imtPct);

            return (
              <CircleMarker
                key={item.id}
                center={parseCoordinates(item.school_coordinate)}
                radius={10}
                color={color}
                fillColor={color}>
                <Popup>
                  <div>
                    <p>{item.school_name}</p>
                    <p>{item.school_category}</p>
                    <p>{item.imt_pct}</p>
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
      <Search handleChange={handleSearchChange} />
    </>
  );
};

export default MapSchool;
