import { ApiData, ImtType } from "@/type";
import { api } from "./api";

export const imt = {
  get: (id?: string) =>
    api
      .get<ApiData<ImtType[]>>(
        `/api/v1/mbgm/school-imt${id ? `?id=${id}` : ""}`
      )
      .then((res) => res.data.data),
};
