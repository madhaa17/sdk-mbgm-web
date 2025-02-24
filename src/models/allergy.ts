import { api } from "./api";
import { AllergiesType, ApiData } from "@/type";

export const allergy = {
  get: (id?: string) =>
    api
      .get<ApiData<AllergiesType[]>>(
        `/api/v1/mbgm/school-allergies${id ? `?id=${id}` : ""}`
      )
      .then((res) => res.data.data),
};
