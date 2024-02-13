// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    // ... other properties
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    // ... other properties
  },
  // Add more products as needed
];

const initialState = {
  products: initialProducts,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    // Add other cart-related reducers as needed
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;