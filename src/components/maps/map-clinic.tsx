import React, { useState } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { dummyData } from "@/dummy";
import VisualData from "../visual-data/clinic";

const getMarkerColor = (totalImtNormalPct: number) => {
  if (totalImtNormalPct <= 0.5) {
    return "red";
  } else if (totalImtNormalPct > 0.5 && totalImtNormalPct <= 0.7) {
    return "orange";
  } else {
    return "green";
  }
};

const MapKitchen = () => {
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
        style={{ height: "100vh", width: "100%", zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dummyData.map((item) => {
          let label;
          const imtPct = item.imt_data.total_imt_normal_pct;

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
              key={item.school_npsn}
              center={[
                item.imt_data.coordinate.lat,
                item.imt_data.coordinate.lng,
              ]}
              radius={10}
              color={color}
              fillColor={color}
              fillOpacity={0.6}
              eventHandlers={{
                click: () => handleMarkerClick(item),
              }}
            />
          );
        })}
      </MapContainer>
      <VisualData onOpenChange={handleClose} open={open} item={item} />
    </>
  );
};

export default MapKitchen;
