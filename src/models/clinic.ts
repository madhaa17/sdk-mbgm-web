import { ClinicList } from "@/type";
import { api } from "./api";

export const clinic = {
  get: (q?: string, limit?: string) =>
    api
      .get<ClinicList[]>(
        `/api/v1/mbgm/healthunit-locations?${
          q ? `q=${encodeURIComponent(q)}&` : ""
        }${limit ? `limit=${limit}` : ""}`
      )
      .then((res) => res.data),
};
