import TextInput from "../../../components/TextInput";

export const fields = [
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
