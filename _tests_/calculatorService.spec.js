import { calculatorService } from "../services/calculatorService";

describe("Should calculate given text", () => {
  test("with given text to calculate should return the right value", () => {
    const operators = ["+", "-", "*", "/"];

    expect(calculatorService("2+2", operators)).toEqual(4);
    expect(calculatorService("2-2", operators)).toEqual(0);
    expect(calculatorService("2*2", operators)).toEqual(4);
    expect(calculatorService("4/2", operators)).toEqual(2);
  });
});
