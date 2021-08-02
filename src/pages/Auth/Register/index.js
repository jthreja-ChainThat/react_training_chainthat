import React from "react";

const Register = (props) => {
  console.log(props);

  const goBack = () => {
    props.history.push('/')
  };

  return (
    <div>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <h1>Register Page</h1>
    </div>
  );
};

export default Register;
