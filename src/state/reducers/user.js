import { SET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  currentUser: {},
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
