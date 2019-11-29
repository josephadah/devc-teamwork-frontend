import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppFooter from "./AppFooter";
import AppNavBar from "./AppNavBar";
import Routes from "./../routes";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="bg-light">
        <AppNavBar />
        <main className="main-wrapper">
          <Routes />
        </main>
        <AppFooter />
      </div>
    </React.Fragment>
  );
}

export default App;
