const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS_REQUEST":
    case "ADD_PRODUCT_REQUEST":
    case "UPDATE_PRODUCT_REQUEST":
      return { ...state, loading: true };

    case "LOAD_PRODUCTS_FAIL":
    case "ADD_PRODUCT_FAIL":
    case "UPDATE_PRODUCT_FAIL":
      return { ...state, loading: false, error: payload };

    case "LOAD_PRODUCTS_SUCCESS":
      return { ...state, loading: false, data: payload };

    case "ADD_PRODUCT_SUCCESS":
      return { ...state, loading: false, data: [...state.data, payload] };

    case "UPDATE_PRODUCT_SUCCESS": {
      const index = state.data.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [
          ...state.data.slice(0, index),
          payload,
          ...state.data.slice(index + 1),
        ],
      };
    }

    default:
      return state;
  }
};
