import React, { useState, useContext } from "react";
import "./login.css";
import { localeContext } from "../../../context/localeContext";
import { fields, initialValues } from "./fields";
import CustomForm from "../../../components/CustomForm";

const Login = (props) => {
  const [date, setDate] = useState();

  const { Consumer } = localeContext;

  console.log("render");

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div id="login-component">
      <Consumer>
        {({ state, setstate }) => (
          <div>
            <span>{state}</span>
            <button type="button" onClick={() => setstate("fr")}>
              Change Locale
            </button>
          </div>
        )}
      </Consumer>

      <h1>Login Page</h1>
      <CustomForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
        buttonProps={{
          fullWidth: true,
          children: "Login",
        }}
      />
    </div>
  );
};

export default Login;
