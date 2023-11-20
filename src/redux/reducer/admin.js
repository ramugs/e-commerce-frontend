import {
  ADMIN_DETAILS_FAILED,
  ADMIN_DETAILS_LOADED,
  ADMIN_DETAILS_LOADING,
} from "../types";

const initialValue = {
  loading: false,
  success: false,
  error: false,
  data: {},
};

export const loginReduer = (state = initialValue, action) => {
  switch (action.type) {
    case ADMIN_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case ADMIN_DETAILS_LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.data,
      };

    case ADMIN_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        data: action.data,
      };
    default:
      return state;
  }
};
