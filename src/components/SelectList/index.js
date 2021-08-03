import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const SelectList = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth={props.fullWidth}
      error={touched[field.name] && !!errors[field.name]}
    >
      <InputLabel id={field.name}>{props.label}</InputLabel>
      <Select labelId={field.name} {...field} {...props}>
        {props.options.map((x) => (
          <MenuItem key={x.value} value={x.value}>
            {x.text}
          </MenuItem>
        ))}
      </Select>
      {touched[field.name] && errors[field.name] && (
        <FormHelperText>{errors[field.name]}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectList;
