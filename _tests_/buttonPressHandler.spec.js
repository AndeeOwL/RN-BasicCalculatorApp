import { buttonPressHandler } from "../services/buttonPressHandler";

describe("Handle button presses", () => {
  test("should return the right values when enter 1 and text is 0", () => {
    expect(buttonPressHandler("1", "0", "0")).toEqual(["1"]);
  });
  test("should return the right values when enter + and text is 0", () => {
    expect(buttonPressHandler("+", "0", "0")).toEqual(["0+"]);
  });
  test("should return the right values when enter + and text is 1+", () => {
    expect(buttonPressHandler("+", "1+", "+")).toEqual(["1+"]);
  });
  test("should return the right values when enter 1 and text is 1+", () => {
    expect(buttonPressHandler("1", "1+", "+")).toEqual(["1+1"]);
  });
  test("should return the right values when enter + and text is 1+1 ", () => {
    expect(buttonPressHandler("+", "1+1", "1")).toEqual([2, "2+"]);
  });
});
