import { api } from "./api";

interface LoginReq {
  identifier: string;
  password: string;
}

interface LoginRes {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}

export const auth = {
  login: async (params: LoginReq) => {
    const res = await api.post<LoginRes>("/login", params);
    return res.data;
  },
};
