import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

type LatLngTuple = [number, number];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseCoordinates(
  school_latitude: string,
  school_longitude: string
): [number, number] {
  const latitude = parseFloat(school_latitude);
  const longitude = parseFloat(school_longitude);

  if (isNaN(latitude) || isNaN(longitude)) {
    throw new Error("Invalid latitude or longitude");
  }

  return [latitude, longitude];
}

export const formatTime = (timeString: string) => {
  const formattedTime = moment(timeString ?? "")
    .utc()
    .format("HH.mm");

  return formattedTime;
};
