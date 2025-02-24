import { create } from "zustand";

interface Total {
  totalStudent: number;
  setTotalStudent: (std: number) => void;
  totalSchool: number;
  setTotalSchool: (std: number) => void;
  studentMale: number;
  studentFemale: number;
  setStudentMale: (std: number) => void;
  setStudentFemale: (std: number) => void;
  totalKitchen: number;
  setTotalKitchen: (std: number) => void;
}

export const useTotal = create<Total>((set) => ({
  totalStudent: 0,
  setTotalStudent: (std) => set({ totalStudent: std }),
  totalSchool: 0,
  setTotalSchool: (std) => set({ totalSchool: std }),
  studentMale: 0,
  setStudentMale: (std) => set({ studentMale: std }),
  studentFemale: 0,
  setStudentFemale: (std) => set({ studentFemale: std }),
  totalKitchen: 0,
  setTotalKitchen: (std) => set({ totalKitchen: std }),
}));
