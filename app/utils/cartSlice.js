// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      console.log(newItem, "adding");
      const existingItem = state.items.find(item => item.label === newItem.label);
      const itemCost = parseFloat(newItem.cost.replace('$', ''));
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalCost: itemCost,
        });
        state.totalQuantity++;
        state.totalAmount += itemCost;
      } else {
        existingItem.quantity++;
        existingItem.totalCost += itemCost;
        state.totalAmount += itemCost;
      }
    },
    removeItem(state, action) {
      const label = action.payload;
      const existingItem = state.items.find(item => item.label === label);
      const itemCost = parseFloat(existingItem.cost.replace('$', ''));
      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= itemCost;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.label !== label);
        } else {
          existingItem.quantity--;
          existingItem.totalCost -= itemCost;
        }
      }
    },
  },
});


export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
