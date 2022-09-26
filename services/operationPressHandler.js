import { OPERATORS } from "../constants/OPERATORS";
import { calculatorService } from "./calculatorService";

export function operationPressHandler(calculationText, enteredValue, lastChar) {
  switch (enteredValue) {
    case "=":
      if (OPERATORS.includes(lastChar)) {
        return;
      } else {
        let result = calculatorService(calculationText, invalidCharSet);
        return [result, "0"];
      }
    case "DEL":
      if (calculationText.toString().length === 1) {
        setOperationsText("0");
        return ["0"];
      } else {
        return [
          operationsText.toString().substring(0, operationsText.length - 1),
        ];
      }
    case "AC":
      return ["0", "0"];
    default:
      return;
  }
}
