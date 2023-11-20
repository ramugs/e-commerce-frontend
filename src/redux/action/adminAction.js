import { LOGIN_ADMIN, RESET_PASSWORD } from "../types";

export const loginActin = (data, onSuccess, onError) => {
  return {
    type: LOGIN_ADMIN,
    data,
    onSuccess,
    onError,
  };
};

export const resetPasswordActin = (data, token, onSuccess, onError) => {
  console.log(token);
  return {
    type: RESET_PASSWORD,
    data,
    token,
    onSuccess,
    onError,
  };
};
