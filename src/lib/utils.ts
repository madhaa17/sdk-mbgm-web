import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

type LatLngTuple = [number, number];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseCoordinates = (input: string): LatLngTuple => {
  if (!input) {
    return [0, 0];
  }

  const [lat, lng] = input?.split(",").map((coord) => Number(coord.trim()));
  return [lat, lng];
};

export const formatTime = (timeString: string) => {
  const formattedTime = moment(timeString ?? "")
    .utc()
    .format("HH.mm");

  return formattedTime;
};
