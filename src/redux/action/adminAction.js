import {
  FIND_ALL_ADMIN,
  FORGET_PASSWORD,
  LOGIN_ADMIN,
  RESET_PASSWORD,
} from "../types";

export const loginActin = (data, onSuccess, onError) => {
  return {
    type: LOGIN_ADMIN,
    data,
    onSuccess,
    onError,
  };
};

export const forgetPasswordActin = (data, onSuccess, onError) => {
  return {
    type: FORGET_PASSWORD,
    data,
    onSuccess,
    onError,
  };
};

export const resetPasswordActin = (data, token, onSuccess, onError) => {
  return {
    type: RESET_PASSWORD,
    data,
    token,
    onSuccess,
    onError,
  };
};

export const findAllAdminActin = (
  search,
  page_no,
  sortName,
  onSuccess,
  onError
) => {
  return {
    type: FIND_ALL_ADMIN,
    search,
    page_no,
    sortName,
    onSuccess,
    onError,
  };
};
