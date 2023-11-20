import axios from "axios";
import { url } from "../config";

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});
