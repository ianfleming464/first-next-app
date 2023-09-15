import { createSlice } from '@reduxjs/toolkit';

const cartItemSlice = createSlice({
  name: 'item',
  initialState: {
    items: [],
    quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.quantity += 1;
    },
  },
});

export const { addToCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;
