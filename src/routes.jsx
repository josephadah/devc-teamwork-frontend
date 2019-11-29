import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./common/components/PageNotFound";
import Home from "./pages/home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" exact component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
