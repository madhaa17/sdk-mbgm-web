import { ApiData, MenuType } from "@/type";
import { api } from "./api";

export const menu = {
  get: (kitchen_id: string, date: string) =>
    api
      .get<ApiData<MenuType[]>>(
        `/api/v1/mbgm/kitchen-menu-schedules?kitchen_id=${kitchen_id}&date=${date}`
      )
      .then((res) => res.data.data),
};
