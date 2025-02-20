import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const apiToken = {
  set: (token: string) => {
    localStorage.setItem("authToken", token);
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  },
  delete: () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    api.defaults.headers["Authorization"] = "";
  },
  get: () => {
    localStorage.getItem("authToken");
  },
  setSession: (token: string) => {
    sessionStorage.setItem("authToken", token);
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  },
  getSession: () => {
    sessionStorage.getItem("authToken");
  },
};

(() => {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("authToken");
    if (token) apiToken.set(token);
  }
})();
