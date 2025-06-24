let num1 = Number(prompt("Enter number 1: "));
let num2 = Number(prompt("Enter number 2: "));
let operation = prompt("Enter your operation like '+', '-', '*', '/'");

function calculate(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "*") {
        return num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Division by zero.";
        }
    } else {
        return "Invalid operation.";
    }
}

let result = calculate(num1, num2, operation);
alert("Result: " + result);
