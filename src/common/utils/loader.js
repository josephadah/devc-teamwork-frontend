import * as $ from "jquery";

const loader = $("#loader");

const show = () => {
  loader.show();
};

const hide = () => {
  loader.hide();
};

export default {
  show,
  hide
};
