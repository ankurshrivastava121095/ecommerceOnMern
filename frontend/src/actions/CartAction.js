import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/CartConstants.js";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/pn/getProductDetail/${id}`);
  console.log(data);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.productDetail._id,
      name: data.productDetail.name,
      price: data.productDetail.price,
      image: data.productDetail.images.url,
      stock: data.productDetail.Stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  console.log(data)
  dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};