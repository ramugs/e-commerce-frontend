import { all } from "redux-saga/effects";
import { watcherAdminLogin, watcherResetPassword } from "./adminSaga";

export default function* rootSaga() {
  yield all([watcherAdminLogin(), watcherResetPassword()]);
}
