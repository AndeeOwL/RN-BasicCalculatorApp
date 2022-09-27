import { operationPressHandler } from "../services/operationPressHandler";

describe("Handle operation presses", () => {
  test("should return the right values from given input", () => {
    expect(operationPressHandler("11", "DEL", "1")).toEqual(["1"]);
    expect(operationPressHandler("11", "AC", "1")).toEqual(["0", "0"]);
    expect(operationPressHandler("1+1", "=", "1")).toEqual([2, 2]);
    expect(operationPressHandler("1+", "=", "+")).toEqual();
    expect(operationPressHandler("1", "DEL", "1")).toEqual(["0"]);
  });
});
