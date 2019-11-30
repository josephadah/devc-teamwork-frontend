import { SET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "./types";

export const setCurrentUser = user => dispatch => {
  dispatch({ type: SET_CURRENT_USER, payload: user });
};

export const loginUser = () => dispatch => {
  dispatch({ type: LOGIN_USER });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
};
