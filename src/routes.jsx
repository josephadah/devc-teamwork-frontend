import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./common/components/PageNotFound";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./common/components/ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/" exact component={Home} /> */}
      <ProtectedRoute path="/" component={Home} />
      <Route path="*" exact component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
