import { api } from "./api";

export const loginAdminApi = (params) => {
  return api.post(`/ecommerce/admin/login`, JSON.stringify(params));
};

export const forgetPasswordApi = (params) => {
  return api.post(`/ecommerce/admin/forget-password`, JSON.stringify(params));
};

export const resetPasswordApi = (params, token) => {
  return api.patch(
    `/ecommerce/admin/reset-password/${token}`,
    JSON.stringify(params)
  );
};

export const findAllAdminApi = (search, page_no = 1, sortName) => {
  return api.get(
    `/ecommerce/admin/all-admin?${search}&page=${page_no}&sort=${sortName}&limit=2`,
    {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    }
  );
};
