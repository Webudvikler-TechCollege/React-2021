import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { About } from "../pages/About";
import { Frontpage } from "../pages/Frontpage";
import { NotFound } from "../pages/NotFound";
import { Signup } from "../pages/Signup";

export function Routes() {
  return (
    <Switch>
      <Route path="/forside">
        <Frontpage />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/">
        <Redirect to="/forside" />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}
