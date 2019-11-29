import React from "react";
import { NavLink, Link } from "react-router-dom";

const AppNavBar = () => {
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
          <li className="nav-item mx-2">
            <NavLink to="/login" className="nav-link">
              Login <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavBar;
