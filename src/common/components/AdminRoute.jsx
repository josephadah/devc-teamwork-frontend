import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  component: Component,
  render,
  isLoggedIn,
  isAdmin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn && isAdmin) {
          return Component ? <Component {...props} /> : render(...props);
        }
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default connect(state => ({
  isLoggedIn: state.user.isLoggedIn,
  isAdmin: state.user.currentUser.isAdmin
}))(AdminRoute);
