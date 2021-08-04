import SelectList from "../../../components/SelectList";
import TextInput from "../../../components/TextInput";

export const fields = [
  {
    name: "productName",
    component: TextInput,
    label: "Product Name",
    fullWidth: true,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Product Name is required";
      }
      return error;
    },
  },
  {
    name: "manufacturer",
    component: SelectList,
    label: "Manufacturer",
    fullWidth: true,
    options: [
      {
        text: "Apple",
        value: "apple",
      },
      {
        text: "Samsung",
        value: "samsung",
      },
    ],
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Manufacturer is required";
      }
      return error;
    },
  },
  {
    name: "price",
    component: TextInput,
    type: "number",
    label: "Price",
    fullWidth: true,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Price is required";
      }
      if (value < 0) {
        error = "Price should be greater then 0";
      }
      return error;
    },
  },
  {
    name: "quantity",
    component: TextInput,
    label: "Quantity",
    fullWidth: true,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Password is required";
      }
      return error;
    },
  },
];

export const initialValues = fields.reduce(
  (p, c) => {
    return { ...p, [c.name]: "" };
  },
  { currency: "us-dollar" }
);
