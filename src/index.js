import React from "react";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./assets/styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import store from "./state/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
