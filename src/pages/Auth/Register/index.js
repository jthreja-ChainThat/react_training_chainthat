import React, { useEffect, useState, useContext } from "react";
import CustomForm from "../../../components/CustomForm";
import { testContext } from "../../../context/testContext";
import { initialValues, fields } from "./fields";
import "./register.css";

const Register = (props) => {
  const [updatedFields, setUpdatedFields] = useState(fields);

  const data = useContext(testContext)

  const onSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    setUpdatedFields(
      fields.map((x) => {
        if (x.name === "gender") {
          return {
            ...x,
            options: [
              {
                text: "Male",
                value: "male",
              },
              {
                text: "Female",
                value: "female",
              },
            ],
          };
        }
        return x;
      })
    );
  }, []);

  return (
    <div id="register-component">
      <h1>Register Page</h1>
      <p>{data}</p>
      <CustomForm
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={updatedFields}
        buttonProps={{
          fullWidth: true,
          children: "Register",
        }}
      />
    </div>
  );
};

export default Register;
