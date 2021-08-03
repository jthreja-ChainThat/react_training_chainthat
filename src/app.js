import React, { Suspense, useEffect } from "react";
import {
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import CustomRoutes from "./components/CustomRoutes";
import LocaleProvider from "./context/localeContext";
import TestProvider from "./context/testContext";
import routes from "./routes";
import store from './configureSore'
import history from './customHistory'

const App = () => {
  // useEffect(() => {
  //   sessionStorage.setItem('token', 'lkjadlkdfjalksdjflaksdjfalsdkfj');
  // }, [])

  return (
    <Router history={history}>
      <Provider store={store}>
        <LocaleProvider>
          <TestProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <CustomRoutes routes={routes}>
                <Redirect from="/" to="/auth" exact />
              </CustomRoutes>
            </Suspense>
          </TestProvider>
        </LocaleProvider>
      </Provider>
    </Router>
  );
};

export default App;
