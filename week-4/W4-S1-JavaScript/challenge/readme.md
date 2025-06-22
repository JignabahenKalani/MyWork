# Simple Calculator

## Challenge

In this exercise, you will build a simple calculator using JavaScript functions. The calculator will accept two numbers and an operation as arguments (e.g., "add", "subtract", "multiply"). The function should use conditional logic to determine which operation to perform. As a bonus, you will add input validation to ensure the function only accepts numbers as valid arguments.

Additionally, explore using a `switch/case` statement to handle the different operations.

## Key Learnings

By completing this exercise, you will:

- Understand how to define and call functions in JavaScript.
- Learn how to pass arguments into a function and use them within the function body.
- Implement conditional logic to handle different operations.
- Learn how to use `switch/case` statements.
- Validate function inputs to ensure only numbers are accepted.

## User Story

As a JavaScript beginner, I want to create a function that performs basic calculator operations so I can understand how functions, arguments, and conditions work together in JavaScript.

## Acceptance Criteria

1. **Create a Function**:
   - Write a function named `calculate` that takes three arguments: two numbers and a string representing the operation (e.g., `"add"`, `"subtract"`, `"multiply"`, `"divide"`).
2. **Handle Basic Operations**:
   - Using conditional logic (either `if/else` or a `switch/case`), implement the following operations:
     - `add` should return the sum of the two numbers.
     - `subtract` should return the difference.
     - `multiply` should return the product.
     - `divide` should return the result of dividing the first number by the second.
3. **Input Validation**:
   - Ensure that both numbers passed as arguments are valid numbers.
   - If invalid input is passed (e.g., a string instead of a number), the function should return an error message like: `"Invalid input: both arguments must be numbers."`
4. **Default Case for Unknown Operations**:
   - If the operation passed in is not recognized (e.g., `"addd"`), return an error message such as `"Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'."`
5. **Bonus**:
   - Implement the function using a `switch/case` statement instead of `if/else` for the operation handling.

## Example Usage

```javascript
// Example valid usage:
calculate(10, 5, "add"); // Output: 15
calculate(10, 5, "subtract"); // Output: 5
calculate(10, 5, "multiply"); // Output: 50
calculate(10, 5, "divide"); // Output: 2

// Example invalid usage:
calculate(10, "five", "add"); // Output: "Invalid input: both arguments must be numbers."
calculate(10, 5, "square"); // Output: "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'."
```

## Additional Requirements

- Test your function in the browser console to ensure all outputs are correct.
- Add comments to explain the function logic, especially for input validation and handling different operations.

## Useful Resources

1. [MDN Web Docs: JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)  
   Learn more about defining and using functions in JavaScript.

2. [MDN Web Docs: `switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)  
   A guide on using `switch` statements in JavaScript to handle multiple cases based on the input.
