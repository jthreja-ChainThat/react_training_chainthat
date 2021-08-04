import React from "react";
import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";

const CustomForm = ({ fields, buttonProps, ...props }) => {
  return (
    <Formik {...props}>
      {() => (
        <Form>
          <div>
            {fields.map((x) => (
              <Field {...x} key={x.name} />
            ))}
            <Button variant="contained" color="primary" type="submit" {...buttonProps} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
