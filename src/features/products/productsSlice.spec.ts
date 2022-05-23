import { products } from "../../data/products";
import { ProductType } from "../../data/ProductType";
import { addNewProduct } from "./productsSlice";
import productsReducer from "./productsSlice";

describe("prodcuts reducer", () => {
  const initialState = {
    products: products,
  };

  const dummyProduct: ProductType = {
    src: "https://gagadget.com/media/cache/a4/59/a4595679120e655850aa705b90df8282.jpg",
    name: "Apple watch",
    price: 1999.0,
  };

  it("should handle adding products", () => {
    const beforeAdding = products.length;
    const actual = productsReducer(initialState, addNewProduct(dummyProduct));
    expect(actual.products.length).toEqual(beforeAdding + 1);
  });
});
