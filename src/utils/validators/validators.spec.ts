import { urlInputValidator } from "./validators";
import { floatCheck } from "./validators";

import { ErrorMsg } from "../errorMsgs";

describe("url validation", () => {
  it("Is not a link", () => {
    const link = "test";
    expect(() => urlInputValidator(link)).toThrowError(ErrorMsg.INVALID_URL);
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

  it("valid link", () => {
    const link = "https://google";
    expect(() => urlInputValidator(link)).toThrowError(ErrorMsg.INVALID_URL);
  });
});

describe("number validation", () => {
  it("Is not a number", () => {
    const test = "test";
    expect(floatCheck(test)).toEqual(false);
  });

  it("Is not a number", () => {
    const test = "12test";
    expect(floatCheck(test)).toEqual(false);
  });

  it("Is a number", () => {
    const test = "123";
    expect(floatCheck(test)).toEqual(true);
  });

  it("Is a number", () => {
    const test = "123.1";
    expect(floatCheck(test)).toEqual(true);
  });

  it("Is a number", () => {
    const test = "123.1";
    expect(floatCheck(test)).toEqual(true);
  });

  it("Number with , shouldn't work", () => {
    const test = "123,1";
    expect(floatCheck(test)).toEqual(false);
  });
});
