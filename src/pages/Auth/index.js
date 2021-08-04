import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CustomRoutes from "../../components/CustomRoutes";

const Auth = ({ routes }) => {
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

      <CustomRoutes routes={routes} />
    </div>
  );
};

export default Auth;
