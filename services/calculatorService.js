export function calculatorService(calculationText, OPERATORS) {
  const operands = [];
  const operators = [];
  let substr = "";
  let result = 0;

  for (i = 0; i <= calculationText.length - 1; i++) {
    let char = calculationText.charAt(i);

    if (!isNaN(char) || char === ".") {
      substr += char.toString();
    } else if (OPERATORS.includes(char)) {
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
