import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
