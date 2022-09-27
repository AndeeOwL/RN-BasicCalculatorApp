import { OPERATORS } from "../constants/OPERATORS";
import { calculatorService } from "./calculatorService";

export function operationPressHandler(calculationText, enteredValue, lastChar) {
  switch (enteredValue) {
    case "=":
      if (OPERATORS.includes(lastChar)) {
        return;
      } else {
        let result = calculatorService(calculationText, OPERATORS);
        return [result, result];
      }
    case "DEL":
      if (calculationText.toString().length === 1) {
        return ["0"];
      } else {
        return [
          calculationText.toString().substring(0, calculationText.length - 1),
        ];
      }
    case "AC":
      return ["0", "0"];
    default:
      return;
  }
}
