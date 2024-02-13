// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Provide the correct path

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers...
  },
});

export default store;