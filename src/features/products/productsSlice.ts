import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { products } from "../../data/products";
import { ProductType } from "../../data/ProductType";

const initialState = {
  products: products,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addNewProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
