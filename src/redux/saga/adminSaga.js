import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_ADMIN, RESET_PASSWORD } from "../types";
import { loginAdminApi, resetPasswordApi } from "../api/adminApi";

export function* adminLoginWorker(action) {
  try {
    const res = yield call(loginAdminApi, action.data);
    if (res.status === 200 && res.data.status === "success") {
      yield action.onSuccess(res.data);
    } else if (res.status === 200 && res.data.status === "fail") {
      yield action.onError(res.data);
    }
  } catch (error) {
    yield action.onError("Something Went Wrong");
  }
}

export function* resetPasswordWorker(action) {
  try {
    const res = yield call(resetPasswordApi, action.data, action.token);
    if (res.status === 200 && res.data.status === "success") {
      yield action.onSuccess(res.data);
    } else if (res.status === 200 && res.data.status === "fail") {
      yield action.onError(res.data);
    }
  } catch (error) {
    yield action.onError("Something Went Wrong");
  }
}


export function* watcherAdminLogin() {
  yield takeLatest(LOGIN_ADMIN, adminLoginWorker);
}

export function* watcherResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPasswordWorker);
}