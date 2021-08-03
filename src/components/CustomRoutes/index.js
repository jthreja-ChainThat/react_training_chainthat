import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../../pages/NoMatch";

const CustomRoutes = ({ routes, children }) => {
  return (
    <Switch>
      {children}
      {routes.map(
        ({ path, component: Component, routes, exact, authRequired }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => {
              if(authRequired) {
                const token = sessionStorage.getItem('token');
                if(token) {
                  return <Component routes={routes} {...props} />
                }
                return <Redirect to="/" />
              }
              return <Component routes={routes} {...props} />
            }}
          />
        )
      )}
      <Route component={NoMatch} />
    </Switch>
  );
};

export default CustomRoutes;
