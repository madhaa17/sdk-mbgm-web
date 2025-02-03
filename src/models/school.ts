import { api } from "./api";
import { SchoolList, schoolDetail } from "@/type";

export const school = {
  get: (q?: string, limit?: string) =>
    api
      .get<SchoolList[]>(
        `/api/v1/mbgm/school-locations?${
          q ? `q=${encodeURIComponent(q)}` : ""
        }${limit ? `limit=${limit}` : ""}`
      )
      .then((res) => res.data),
  getDetail: (id: number) =>
    api
      .get<schoolDetail>(`/api/v1/mbgm/school-details/${id}`)
      .then((res) => res.data),
};
