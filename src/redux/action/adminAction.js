import { LOGIN_ADMIN } from "../types";

export const loginActin = (data, onSuccess, onError) => {
  return {
    type: LOGIN_ADMIN,
    data,
    onSuccess,
    onError,
  };
};

