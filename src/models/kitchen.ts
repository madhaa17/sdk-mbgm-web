import { api } from "./api";
import { KitchenList } from "@/type";

export const kitchen = {
  get: (q?: string, limit?: string) =>
    api
      .get<KitchenList[]>(
        `/api/v1/mbgm/kitchen-locations?${
          q ? `q=${encodeURIComponent(q)}&` : ""
        }${limit ? `limit=${limit}` : ""}`
      )
      .then((res) => res.data),

  getDetail: (id: number) =>
    api.get(`/api/v1/mbgm/kitchen-details/${id}`).then((res) => res.data),
};
