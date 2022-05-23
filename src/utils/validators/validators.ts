import { ErrorMsg } from "../../utils/errorMsgs";

export const urlInputValidator = (link: string) => {
  if (!link.includes(".")) throw Error(ErrorMsg.INVALID_URL);
  if (link.startsWith("http")) {
    try {
      new URL(link);
      return true;
    } catch (error) {
      throw Error(ErrorMsg.INVALID_URL);
    }
  } else {
    throw Error(ErrorMsg.HTTP_HTTPS);
  }
};

export const intChecker = (value: string): boolean => {
  return /^-?\d+(?:[.]\d*?)?$/.test(value);
};

export const checkIfInputsAreValid = (
  name: string,
  price: string,
  url: string
) => {
  if (!name || !price || !url) {
    throw Error(ErrorMsg.EMPTY_FIELDS);
  }

  if (!intChecker(price)) {
    throw Error(ErrorMsg.INVALID_PRICE);
  }

  urlInputValidator(url);
};
