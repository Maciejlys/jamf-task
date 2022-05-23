import { urlInputValidator } from "./validators";
import { intChecker } from "./validators";

import { ErrorMsg } from "../errorMsgs";

describe("url validation", () => {
  it("Is not a link", () => {
    const link = "test";
    expect(() => urlInputValidator(link)).toThrowError(ErrorMsg.HTTP_HTTPS);
  });

  it("lacks http or https", () => {
    const link = "google.com";
    expect(() => urlInputValidator(link)).toThrowError(ErrorMsg.HTTP_HTTPS);
  });

  it("lacks http or https", () => {
    const link = "www.google.com";
    expect(() => urlInputValidator(link)).toThrowError(ErrorMsg.HTTP_HTTPS);
  });

  it("valid link", () => {
    const link = "http://www.google.com";
    expect(urlInputValidator(link)).toEqual(true);
  });

  it("valid link", () => {
    const link = "https://www.google.com";
    expect(urlInputValidator(link)).toEqual(true);
  });

  it("valid link", () => {
    const link = "https://google.com";
    expect(urlInputValidator(link)).toEqual(true);
  });
});

describe("number validation", () => {
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