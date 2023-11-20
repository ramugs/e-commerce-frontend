import { all } from "redux-saga/effects";
import { watcherAdminLogin } from "./adminSaga";

export default function* rootSaga() {
  yield all([watcherAdminLogin()]);
}
