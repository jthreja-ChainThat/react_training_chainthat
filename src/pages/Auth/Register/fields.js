import SelectList from "../../../components/SelectList";
import TextInput from "../../../components/TextInput";

export const fields = [
  {
    name: "name",
    component: TextInput,
    label: "Name",
    fullWidth: true,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Name is required";
      }
      return error;
    },
  },
  {
    name: "gender",
    component: SelectList,
    label: "Gender",
    fullWidth: true,
    options: [],
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Name is required";
      }
      return error;
    },
  },
  {
    name: "username",
    component: TextInput,
    label: "Username",
    fullWidth: true,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Username is required";
      }
      return error;
    },
  },
  {
    name: "password",
    component: TextInput,
    label: "Password",
    fullWidth: true,
    type: "password",
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Password is required";
      }
      return error;
    },
  },
];

export const initialValues = fields.reduce((p, c) => {
  return { ...p, [c.name]: "" };
}, {});
