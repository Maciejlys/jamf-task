import modalReducer, { toggleModal } from "./modalSlice";

describe("modal reducer", () => {
  const initialState = {
    isOpen: false,
  };

  it("should handle toggling", () => {
    const actual = modalReducer(initialState, toggleModal());
    expect(actual.isOpen).toEqual(true);
  });
});
