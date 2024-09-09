import axios from "axios";

export const shopperApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

export const setAuthorizationToken = (token: string | null) => {
  if (token) {
    shopperApi.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    shopperApi.defaults.headers.Authorization = null;
  }
};
