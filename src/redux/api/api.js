import axios from "axios";
import { url } from "../config";

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

function excludeAccessToken(config) {
  return config.url.includes("/login");
}

api.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem("accessToken")) {
      if (!excludeAccessToken(config)) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "accessToken"
        )}`;
      }
    }
    return config;
  },
  async (error) => {}
);

api.interceptors.response.use(
  async (config) => {
    // if (
    //   config.data.message === "Authentication failed"
    //   // ||config.data.message ==="Un-expected Error"
    // ) {
    //   localStorage.clear();
    //   window.location.reload();
    // }
    return config;
  },
  async (error) => {
    console.log(error, "jadbAKJDa");
  }
);
