import axiosInstance from "../utils/axiosInstance";
import history from "../customHistory";

export const loadProductsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOAD_PRODUCTS_REQUEST" });
      const res = await axiosInstance.get("products");
      dispatch({ type: "LOAD_PRODUCTS_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOAD_PRODUCTS_FAIL", payload: error });
    }
  };
};

export const addProductAction = (data) => {
  return async (dispatch) => {
    try {
      if (data.id) {
        dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
        const res = await axiosInstance.put(`products/${data.id}`, data);
        dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: res.data });
      } else {
        dispatch({ type: "ADD_PRODUCT_REQUEST" });
        const res = await axiosInstance.post("products", data);
        dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: res.data });
      }
      history.push("/home");
    } catch (error) {
      if (data.id) {
        dispatch({ type: "UPDATE_PRODUCT_FAIL", payload: error });
      } else {
        dispatch({ type: "ADD_PRODUCT_FAIL", payload: error });
      }
    }
  };
};
