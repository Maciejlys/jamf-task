import { checkIfInputsAreValid, intChecker } from "./validators";

describe("html validation", () => {
  it("Is not a number", () => {
    const test = "test";
    expect(intChecker(test)).toEqual(false);
  });

  it("Is not a number", () => {
    const test = "12test";
    expect(intChecker(test)).toEqual(false);
  });

  it("Is a number", () => {
    const test = "123";
    expect(intChecker(test)).toEqual(true);
  });
});
