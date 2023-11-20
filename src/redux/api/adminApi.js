import { api } from "./api";

export const loginAdminApi = (params) => {
  return api.post(`/ecommerce/admin/login`, JSON.stringify(params));
};
