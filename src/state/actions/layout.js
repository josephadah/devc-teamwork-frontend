import { HIDE_NAVBAR, HIDE_FOOTER, SHOW_FOOTER, SHOW_NAVBAR } from "./types";

export const hideNavbar = () => dispatch => {
  dispatch({
    type: HIDE_NAVBAR
  });
};

export const showNavbar = () => dispatch => {
  dispatch({
    type: SHOW_NAVBAR
  });
};

export const hideFooter = () => dispatch => {
  dispatch({
    type: HIDE_FOOTER
  });
};

export const showFooter = () => dispatch => {
  dispatch({
    type: SHOW_FOOTER
  });
};
