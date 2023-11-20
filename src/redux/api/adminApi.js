import { api } from "./api";

export const loginAdminApi = (params) => {
  return api.post(`/ecommerce/admin/login`, JSON.stringify(params));
};

export const forgetPasswordApi = (params) => {
  return api.post(`/ecommerce/admin/forget-password`, JSON.stringify(params));
};

export const resetPasswordApi = (params, token) => {
  return api.patch(`/ecommerce/admin/reset-password/${token}`, JSON.stringify(params));
};
