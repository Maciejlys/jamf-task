const intParser = (value: string): number => {
  return parseInt(value);
};

export const checkIfInputsAreValid = (
  name: string,
  price: string,
  url: string
) => {
  if (!name || !price || !url) {
    throw Error("All fields are required");
  }
};
