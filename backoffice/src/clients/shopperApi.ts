import axios from "axios";

export const shopperApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

export const setToken = (token: string) => {
  shopperApi.defaults.headers.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  shopperApi.defaults.headers.Authorization = "";
};
