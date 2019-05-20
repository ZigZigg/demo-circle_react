import { combineReducers } from "redux";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/actionTypes";
const INITIAL_STATE = {
  userData: null,
  loading: false
};

export default (authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: { id: action.id }
      };
    default:
      return state;
  }
});
