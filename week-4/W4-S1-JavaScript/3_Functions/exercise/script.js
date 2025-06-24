// TODO: Add the code here
function multiplyNumbers(a, b) {
  return a * b;
}

let result = multiplyNumbers(5 ,'5');
console.log("The result is: " + result);

function calculate(num1, num2, operation) {
  
  switch (operation) {
    case "add":
      return num1 + num2;

    case "subtract":
      return num1 - num2;

    case "multiply":
      return num1 * num2;

    case "divide":
    
      if (num2 === 0) {
        return "Error: cannot divide by zero.";
      }
      return num1 / num2;

    default:
      return "Unknown operation";
  }
}