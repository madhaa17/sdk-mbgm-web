import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";
import { LatLngTuple } from "leaflet";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseCoordinates = (
  lat: string | number,
  lng: string | number
): LatLngTuple | null => {
  const parsedLat = parseFloat(String(lat));
  const parsedLng = parseFloat(String(lng));

  // Cek jika lat/lng tidak valid
  if (isNaN(parsedLat) || isNaN(parsedLng)) {
    console.warn(`Invalid coordinates detected -> lat: ${lat}, lng: ${lng}`);
    return null;
  }

  // Validasi range latitude (-90 to 90) dan longitude (-180 to 180)
  if (
    parsedLat < -90 ||
    parsedLat > 90 ||
    parsedLng < -180 ||
    parsedLng > 180
  ) {
    console.warn(
      `Out of range coordinates -> lat: ${parsedLat}, lng: ${parsedLng}`
    );
    return null;
  }

  return [parsedLat, parsedLng];
};

export const formatTime = (timeString: string) => {
  const formattedTime = moment(timeString ?? "")
    .utc()
    .format("HH.mm");

  return formattedTime;
};

export function parseLatLong(schoolLatLong: string): LatLngTuple | null {
  const coordinates = schoolLatLong
    .split(",")
    .map((coord) => parseFloat(coord.trim()));

  if (coordinates.length !== 2) {
    console.warn(`Invalid coordinates detected -> ${schoolLatLong}`);
    return null;
  }

  return coordinates as LatLngTuple;
}
