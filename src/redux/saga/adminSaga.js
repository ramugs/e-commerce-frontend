import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_ADMIN } from "../types";
import { loginAdminApi } from "../api/adminApi";

export function* adminLoginWorker(action) {
  try {
    const res = yield call(loginAdminApi, action.data);
    console.log(res, "asdaaaaaaaaaaaa");
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
