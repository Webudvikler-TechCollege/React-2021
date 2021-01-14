import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { About } from "../pages/About";
import { Frontpage } from "../pages/Frontpage";
import { NotFound } from "../pages/NotFound";
import { Signup } from "../pages/Signup";

// Vores navigtion ligger uden for switchen
// Switch "skifter" imellem routes vi definerer inden i
// Det første Route komponent peger på /forside og renderer Frontpage når den rammes


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
