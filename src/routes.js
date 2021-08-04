// import Auth from "./pages/Auth";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Main from "./pages/Main";
// import Home from "./pages/Main/Home";

import { lazy } from "react";
import AddProduct from "./pages/Main/AddProduct";

const Auth = lazy(() => import("./pages/Auth"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Main = lazy(() => import("./pages/Main"));
const Home = lazy(() => import("./pages/Main/Home"));

const routes = [
  {
    path: "/auth",
    component: Auth,
    routes: [
      {
        path: "/auth",
        exact: true,
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/home",
    component: Main,
    authRequired: false,
    routes: [
      {
        path: "/home",
        component: Home,
        exact: true
      },
      {
        path: "/home/addproduct",
        component: AddProduct,
      },
    ],
  },
];

export default routes;
