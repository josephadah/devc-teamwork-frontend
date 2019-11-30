import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import auth from "../common/services/authService";

const AppNavBar = props => {
  const logout = e => {
    e.preventDefault();
    auth.logOutUser();
    window.location = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white fixed-top px-md-5 pt-3 bg-landing">
      <Link to="/" className="navbar-brand">
        <h2>TeamWork</h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {props.currentUser.isAdmin && (
            <li className="nav-item mx-2">
              <NavLink to="/create-user" className="nav-link">
                Create User
              </NavLink>
            </li>
          )}
          {props.isLoggedIn && (
            <li className="nav-item mx-2">
              <a href="#" onClick={logout} className="nav-link">
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default connect(state => ({
  isLoggedIn: state.user.isLoggedIn,
  currentUser: state.user.currentUser
}))(AppNavBar);
