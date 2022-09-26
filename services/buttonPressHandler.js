import { OPERATORS } from "../constants/OPERATORS";
import { calculatorService } from "./calculatorService";
export function buttonPressHandler(enteredValue, calculationText, lastChar) {
  let isValid = false;

  for (i = 0; i < calculationText.length; i++) {
    if (OPERATORS.includes(calculationText.charAt(i))) {
      isValid = true;
    }
  }

  if (calculationText.toString() === "0" && !isNaN(enteredValue)) {
    return [enteredValue];
  } else if (
    (OPERATORS.includes(lastChar) || lastChar === ".") &&
    (OPERATORS.includes(enteredValue) || enteredValue === ".")
  ) {
    return;
  } else if (OPERATORS.includes(enteredValue) && isValid) {
    let result = calculatorService(calculationText, OPERATORS);
    return [result, result + enteredValue.toString()];
  } else {
    return [calculationText + enteredValue.toString()];
  }
}
