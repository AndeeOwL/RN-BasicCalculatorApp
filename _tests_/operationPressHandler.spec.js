import { operationPressHandler } from "../services/operationPressHandler";

describe("Handle operation presses", () => {
  test("should delete last char when entered DEL", () => {
    expect(operationPressHandler("11", "DEL", "1")).toEqual(["1"]);
  });
  test("should return two 0 values when entered AC", () => {
    expect(operationPressHandler("11", "AC", "1")).toEqual(["0", "0"]);
  });
  test("should return the right values when entered =", () => {
    expect(operationPressHandler("1+1", "=", "1")).toEqual([2, 2]);
  });
  test("should do nothing if entered = and last char is operator", () => {
    expect(operationPressHandler("1+", "=", "+")).toEqual();
  });
  test("should return 0 if text lenght is 1", () => {
    expect(operationPressHandler("1", "DEL", "1")).toEqual(["0"]);
  });
});
