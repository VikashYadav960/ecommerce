import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: savedCart ? JSON.parse(savedCart) : []
  },

  reducers: {
    // ✅ ADD TO CART
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (exist) {
        // Agar pehle se exist karta hai to quantity add karo
        exist.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // ✅ REMOVE
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // ✅ INCREASE
    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // ✅ DECREASE
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty
} = cartSlice.actions;

export default cartSlice.reducer;
