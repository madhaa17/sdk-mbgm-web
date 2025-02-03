import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type LatLngTuple = [number, number];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseCoordinates = (input: string): LatLngTuple => {
  const [lat, lng] = input.split(",").map((coord) => Number(coord.trim()));
  return [lat, lng];
};

export const formatTime = (timeString: string) => {
  const date = new Date(timeString);

  date.setHours(date.getHours() + 7);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}.${minutes}`;
};
