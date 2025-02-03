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
