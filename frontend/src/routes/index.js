import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Data from "../pages/Data";
import Analysis from "../pages/Analysis";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import { authHOC } from "../components/authHOC";
import store from "../store";
import { authAction } from "../store/actions/authAction";

const Routes = () => {
  const token = localStorage.getItem("token");
  if (token) {
    store.dispatch(authAction(token));
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard/" component={authHOC(Dashboard)} />
        <Route exact path="/data/" component={authHOC(Data)} />
        <Route exact path="/analysis/" component={authHOC(Analysis)} />
        <Route exact path="/settings/" component={authHOC(Settings)} />
        <Route exact path="/login/" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
