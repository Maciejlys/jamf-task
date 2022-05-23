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
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addNewProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addNewProduct } = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
