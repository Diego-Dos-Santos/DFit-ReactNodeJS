import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Trainers } from "./containers/trainers";
import { Review } from "./containers/review";
import { Results } from "./containers/results";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Trainers} />
      <Route path="/resultados" component={Results} />
      <Route path="/valoracion" component={Review} />
    </Switch>
  </BrowserRouter>
);

export default Routes;