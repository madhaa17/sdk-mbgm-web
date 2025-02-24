import { api } from "./api";
import { SchoolList, schoolDetail } from "@/type";
import { ApiData } from "@/type";

export const school = {
  get: (q?: string, limit?: string) =>
    api
      .get<ApiData<SchoolList[]>>(
        `/api/v1/mbgm/schools?${q ? `q=${encodeURIComponent(q)}&` : ""}${
          limit ? `limit=${limit}` : ""
        }`
      )
      .then((res) => res.data.data),
  getDetail: (id: number) =>
    api
      .get<ApiData<schoolDetail>>(`/api/v1/mbgm/schools/${id}`)
      .then((res) => res.data.data),
};
