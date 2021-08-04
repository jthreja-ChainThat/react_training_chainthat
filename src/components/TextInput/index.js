import { TextField } from "@material-ui/core";
import React from "react";

const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <TextField
      variant="outlined"
      error={touched[field.name] && !!errors[field.name]}
      helperText={touched[field.name] && errors[field.name]}
      {...field}
      {...props}
    />
  );
};

export default TextInput;
