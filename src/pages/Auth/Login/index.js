import React from "react";

const Login = (props) => {
  const redirect = (path) => {
    props.history.push(path)
  };

  const replace = (path) => {
    props.history.replace(path)
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button type="button" onClick={() => redirect('/register')}>
        Register
      </button>

      <button type="button" onClick={() => replace('/home')}>
        Go To Home
      </button>
    </div>
  );
};

export default Login;
