import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/auth" exact component={Login} />
        <Route path="/auth/register" component={Register} />
      </Switch>
    </div>
  );
};

export default Auth;
