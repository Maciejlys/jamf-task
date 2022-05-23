import { urlInputValidator } from "./validators";

describe("html validation", () => {
  it("Is not a link", () => {
    const link = "test";
    expect(urlInputValidator(link)).toEqual(false);
  });

  it("lacks http or https", () => {
    const link = "google.com";
    expect(urlInputValidator(link)).toEqual(false);
  });

  it("lacks http or https", () => {
    const link = "www.google.com";
    expect(urlInputValidator(link)).toEqual(false);
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
