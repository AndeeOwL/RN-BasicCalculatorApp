export function calculatorService(operationText, invalidCharSet) {
  const operands = [];
  const operators = [];
  let substr = "";
  let result = 0;

  for (i = 0; i <= operationText.length - 1; i++) {
    let char = operationText.charAt(i);

    if (!isNaN(char) || char === ".") {
      substr += char.toString();
    } else if (invalidCharSet.includes(char)) {
      operators.push(char);
      operands.push(substr);
      substr = "";
    }
  }
  operands.push(substr);

  for (i = 0; i <= operators.length - 1; i++) {
    let firstOperand = operands[i];
    let secondOperand = operands[i + 1];
    let operator = operators[i];

    switch (operator) {
      case "-":
        result = Number(firstOperand) - Number(secondOperand);
        break;
      case "+":
        result = Number(firstOperand) + Number(secondOperand);
        break;
      case "/":
        result = Number(firstOperand) / Number(secondOperand);
        break;
      case "*":
        result = Number(firstOperand) * Number(secondOperand);
        break;
    }
  }
  return result;
}
