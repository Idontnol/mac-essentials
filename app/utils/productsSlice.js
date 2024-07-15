
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  activeProduct: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setActiveProduct(state, action) {
      state.activeProduct = action.payload;
    },
  },
});

export const { setProducts, setActiveProduct } = productsSlice.actions;
export default productsSlice.reducer;
