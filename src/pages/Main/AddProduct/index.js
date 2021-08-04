import React from "react";
import CustomForm from "../../../components/CustomForm";
import { initialValues, fields } from "./fields";
import { connect } from "react-redux";
import { addProductAction } from "../../../actions/productsAction";
import "./addProduct.css";

const AddProduct = ({ addProduct, location }) => {
  console.log(location);

  //   const onSubmit = (values, actions) => {
  //     addProduct(values, actions);
  //   };

  return (
    <div id="add-product-component">
      <h1>{location.state?.product ? "Edit Product" : "Add Product"}</h1>
      <CustomForm
        initialValues={location.state?.product ? location.state?.product : initialValues}
        onSubmit={addProduct}
        fields={fields}
        buttonProps={{
          fullWidth: true,
          children: location.state?.product ? "Edit Product" : "Add Product",
        }}
      />
    </div>
  );
};

const getStore = () => {
  return {};
};

const dispatchStore = (dispatch) => {
  return {
    addProduct: (values, actions) =>
      addProductAction(values, actions)(dispatch),
  };
};

export default connect(getStore, dispatchStore)(AddProduct);
