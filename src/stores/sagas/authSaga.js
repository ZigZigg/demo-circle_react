import { LOGIN_REQUEST } from "../actions/actionTypes";
import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { loginSuccess } from "../actions";
import { loginApi } from "./../services/authApi";
export const loginAction = function*(payload) {
  try {
    const { email, password } = payload;
    const { user } = yield call(loginApi, email, password);
    console.log("respone saga", user);
    if (user) {
      const id = user._user.uid;
      yield put(loginSuccess(id));
    }
  } catch (err) {
    console.log(err);
  }
};

export default [takeLatest(LOGIN_REQUEST, loginAction)];
