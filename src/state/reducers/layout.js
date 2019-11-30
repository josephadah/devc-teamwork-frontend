import {
  SHOW_NAVBAR,
  HIDE_NAVBAR,
  SHOW_FOOTER,
  HIDE_FOOTER
} from "../actions/types";

const initialState = {
  showNavbar: true,
  showFooter: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HIDE_NAVBAR:
      return {
        ...state,
        showNavbar: false
      };
    case HIDE_FOOTER:
      return {
        ...state,
        showFooter: false
      };
    case SHOW_NAVBAR:
      return {
        ...state,
        showNavbar: true
      };
    case SHOW_FOOTER:
      return {
        ...state,
        showFooter: true
      };
    default:
      return state;
  }
};
