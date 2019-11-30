import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../common/services/authService";
import { connect } from "react-redux";
import AppFooter from "./AppFooter";
import AppNavBar from "./AppNavBar";
import Routes from "./../routes";

class App extends Component {
  constructor(props) {
    super(props);
    auth.loginUserLocal();
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="bg-light">
          {this.props.showFooter && <AppNavBar />}
          <main className="main-wrapper">
            <Routes />
          </main>
          {this.props.showFooter && <AppFooter />}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showNavbar: state.layout.showNavbar,
  showFooter: state.layout.showFooter
});

export default connect(mapStateToProps)(App);
