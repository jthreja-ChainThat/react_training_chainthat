import { Button, IconButton } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { loadProductsAction } from "../../../actions/productsAction";

const Home = ({ products, user, loadData, history }) => {
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h1>Home Page</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/home/addproduct")}
      >
        Add Product
      </Button>
      {products.data.map((x) => (
        <div key={x.id}>
          <p>{`Product Name: ${x.productName}`}</p>
          <p>{`Manufacturer: ${x.manufacturer}`}</p>
          <p>{`price: $ ${x.price}`}</p>
          <div>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => history.push("/home/addproduct", {
                product: x
              })}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

const getStore = (state) => {
  return {
    products: state.products,
    user: state.user,
  };
};

const dispatchStore = (dispatch) => {
  return {
    loadData: () => loadProductsAction()(dispatch),
  };
};

export default connect(getStore, dispatchStore)(Home);
