import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Welcome from "./welcome";

const Routes = () => {
  return (
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Redirect to="/welcome" />
    </Switch>
  );
};

export default Routes;
