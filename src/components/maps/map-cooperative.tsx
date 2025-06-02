import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";

import React, { useCallback, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { debounce } from "lodash";
import Search from "../search";
import { parseCoordinates } from "@/lib/utils";
import { Button } from "../ui/button";
import { dummyCooperatives } from "@/lib/dummy";
import CooperativeInfo from "../cooperative";
import VisualDataHomeCooperative from "../visual-data/home/cooperative";

const MapCooperative = () => {
  const position = [-2.5489, 118.0149];

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<any>(null);
  const [query, setQuery] = useState("");

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
          {dummyCooperatives?.map((item) => {
            const coordinates = parseCoordinates(
              item.healthunit_latitude,
              item.healthunit_longitude
            );

            if (!coordinates) {
              return null;
            }
            return (
              <CircleMarker
                key={item.healthunit_id}
                center={coordinates}
                radius={10}
                color={"blue"}
                fillColor={"blue"}>
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

      <Search handleChange={handleSearchChange} />
      <VisualDataHomeCooperative />

      <CooperativeInfo open={open} onOpenChange={setOpen} item={item} />
    </>
  );
};

export default MapCooperative;
