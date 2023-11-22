import { call, put, takeLatest } from "redux-saga/effects";
import {
  FIND_ALL_ADMIN,
  FORGET_PASSWORD,
  LOGIN_ADMIN,
  RESET_PASSWORD,
} from "../types";
import {
  findAllAdminApi,
  forgetPasswordApi,
  loginAdminApi,
  resetPasswordApi,
} from "../api/adminApi";

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

export function* forgetPasswordWorker(action) {
  try {
    const res = yield call(forgetPasswordApi, action.data);
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

export function* findAllAdminWorker(action) {
  try {
    const res = yield call(
      findAllAdminApi,
      action.search,
      action.page_no,
      action.sortName
    );
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
export function* watcherForgetPassword() {
  yield takeLatest(FORGET_PASSWORD, forgetPasswordWorker);
}

export function* watcherResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPasswordWorker);
}
export function* watcherFindAllAdmin() {
  yield takeLatest(FIND_ALL_ADMIN, findAllAdminWorker);
}
