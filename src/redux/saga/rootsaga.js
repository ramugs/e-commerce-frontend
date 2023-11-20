import { all } from "redux-saga/effects";
import {
  watcherAdminLogin,
  watcherForgetPassword,
  watcherResetPassword,
} from "./adminSaga";

export default function* rootSaga() {
  yield all([
    watcherAdminLogin(),
    watcherForgetPassword(),
    watcherResetPassword(),
  ]);
}
