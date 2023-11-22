import { all } from "redux-saga/effects";
import {
  watcherAdminLogin,
  watcherFindAllAdmin,
  watcherForgetPassword,
  watcherResetPassword,
} from "./adminSaga";

export default function* rootSaga() {
  yield all([
    watcherAdminLogin(),
    watcherForgetPassword(),
    watcherResetPassword(),
    watcherFindAllAdmin(),
  ]);
}
