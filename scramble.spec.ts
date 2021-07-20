import { scramble } from "./scramble"

describe("scramble", () => {
  it("should return false when both arguments are not equal", () => {
    expect(scramble("a", "c")).toBeFalsy()
  });

  it("should return true when both arguments are equal", () => {
    expect(scramble("a", "a")).toBeTruthy()
  });


});