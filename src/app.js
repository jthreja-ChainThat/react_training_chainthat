import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={Auth} />
        <Route path="/home" component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
