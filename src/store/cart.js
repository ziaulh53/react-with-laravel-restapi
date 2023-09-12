import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addCartStore: (state, action) => {

    },
    deleteCartStore: (state, action) => {
        
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartStore, deleteCartStore } = cartSlice.actions;

export default cartSlice.reducer;
