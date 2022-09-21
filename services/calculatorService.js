export function calculatorService(operationText, invalidCharSet) {
  const operands = [];
  const operators = [];
  let substr = "";
  let result = 0;
  for (i = 0; i <= operationText.length - 1; i++) {
    let char = operationText.charAt(i);
    if (!isNaN(char)) {
      substr.concat(char);
    } else if (invalidCharSet.includes(char)) {
      operators.push(char);
      operands.push(substr);
      substr = "";
    }
  }
  for (i = 0; i <= operators.length - 1; i++) {
    firstOperand = operands.at(i);
    secondOperand = operands.at(i + 1);
    operators = operators.at(i);

    switch (operator) {
      case "-":
        result += firstOperand - secondOperand;
        break;
      case "+":
        result += firstOperand + secondOperand;
        break;
      case "/":
        result += firstOperand / secondOperand;
        break;
      case "*":
        result += firstOperand * secondOperand;
        break;
    }
  }
  return result;
}
