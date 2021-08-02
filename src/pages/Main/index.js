import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

    </div>
  );
};

export default Main;
