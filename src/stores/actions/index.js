import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const loginAction = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    email,
    password
  };
};
export const loginSuccess = id => {
  return {
    type: LOGIN_SUCCESS,
    id
  };
};
