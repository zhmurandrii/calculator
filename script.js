function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b === 0 ? "Error" : a / b;
}

function operate(op, a, b) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

let displayText = document.getElementById("display");
let buttons = document.querySelectorAll("button");

function calculate() {
  let input = displayText.textContent;
  const availableOperators = ["+", "-", "x", "/"];

  const operator = availableOperators.find((op) => input.includes(op));
  if (!operator) return;

  const parts = input.split(operator);
  if (parts[1] === "") return;

  const firstNum = parseFloat(parts[0]);
  const secondNum = parseFloat(parts[1]);

  const result = operate(operator, firstNum, secondNum);

  displayText.textContent = Math.round(result * 1000) / 1000;
}
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.textContent;
    const currentText = displayText.textContent;
    const operators = ["+", "-", "x", "/"];

    if (value === "AC" || value === "OC") {
      displayText.textContent = "0";
    } else if (value === "=") {
      calculate();
    } else if (operators.includes(value)) {
      const alreadyHasOperator = operators.some((op) =>
        currentText.includes(op),
      );

      if (alreadyHasOperator) {
        calculate();
        displayText.textContent += value;
      } else {
        displayText.textContent += value;
      }
    } else {
      if (displayText.textContent === "0") {
        displayText.textContent = value;
      } else {
        displayText.textContent += value;
      }
    }
  });
});
