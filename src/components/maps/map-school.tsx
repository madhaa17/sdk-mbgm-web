import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/styles";

import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  Marker,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import VisualData from "../visual-data/school";
import { SchoolList } from "@/type";
import { parseCoordinates } from "@/lib/utils";
import { Button } from "../ui/button";

interface MapSchoolProps {
  data: SchoolList[];
}

const getMarkerColor = (totalImtNormalPct: number) => {
  if (totalImtNormalPct <= 0.5) {
    return "red";
  } else if (totalImtNormalPct > 0.5 && totalImtNormalPct <= 0.7) {
    return "orange";
  } else {
    return "green";
  }
};

const MapSchool = (props: MapSchoolProps) => {
  const { data } = props;

  if (!Array.isArray(data)) {
    throw new Error("Data must be an array");
  }

  const position = [-2.5489, 118.0149];

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<any>(null);

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
    </>
  );
};

export default MapSchool;
