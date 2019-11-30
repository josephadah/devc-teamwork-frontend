import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  render,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoggedIn)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render(...props);
      }}
    />
  );
};

export default connect(state => ({ isLoggedIn: state.user.isLoggedIn }))(
  ProtectedRoute
);
