import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Welcome from "../src/containers/welcome";
import Budget from "./containers/budget";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/budget" component={Budget} />
      </Switch>
    </HashRouter>
  );
}

export default App;
