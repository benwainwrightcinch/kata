import { scramble } from "./scramble"

describe("scramble", () => {
  it("should return false when both arguments are not equal", () => {
    expect(scramble("a", "c")).toBeFalsy()
  });

  it("should return true when both arguments are equal", () => {
    expect(scramble("a", "a")).toBeTruthy()
  });

  it("should return true when the second arg is contained within the first", () => {
    expect(scramble("foobar", "bar")).toBeTruthy()
  });

  it("should return true when all of the characters of the second arg are contained within the first", () => {
    expect(scramble("foobar", "fbr"))
  });
});