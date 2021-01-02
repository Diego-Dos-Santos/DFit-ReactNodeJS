import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {  Results } from "./containers/results"
import { Trainers } from "./containers/trainers";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Trainers} />
      <Route path="/resultados" component={Results} />
    </Switch>
  </BrowserRouter>
);

export default Routes;