import { api } from "./api";
import { ApiData, KitchenDetail, KitchenList } from "@/type";

export const kitchen = {
  get: (q?: string, limit?: string) =>
    api
      .get<ApiData<KitchenList[]>>(
        `/api/v1/mbgm/kitchens?${q ? `q=${encodeURIComponent(q)}&` : ""}${
          limit ? `limit=${limit}` : ""
        }`
      )
      .then((res) => res.data.data),

  getDetail: (id: string) =>
    api
      .get<ApiData<KitchenDetail>>(`/api/v1/mbgm/kitchens/${id}`)
      .then((res) => res.data.data),
};
