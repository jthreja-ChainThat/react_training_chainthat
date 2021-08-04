import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CustomRoutes from "../../components/CustomRoutes";

const Main = ({ routes }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
      <CustomRoutes routes={routes} />
    </div>
  );
};

export default Main;
