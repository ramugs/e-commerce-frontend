import { api } from "./api";

export const loginAdminApi = (params) => {
  return api.post(`/ecommerce/admin/login`, JSON.stringify(params));
};

export const resetPasswordApi = (params, token) => {
  console.log(token, params);
  return api.patch(`/reset-password/${token}`, JSON.stringify(params));
};
