# Troubleshooting Functions

## Challenge

In this exercise, you will troubleshoot and fix a common issue in a JavaScript function. The provided function is supposed to calculate the sum of two numbers, but it does not produce the correct result. Your task is to identify the issue, understand why it’s happening, and fix it.

### Given Code:

```javascript
function multiplyNumbers(a, b) {
  return a * b;
}

let result = multiplyNumbers(5);
console.log("The result is: " + result);
```

### Current Output:

1. Run the function: When you run the function, the output will be "The result is: NaN" instead of a number.

2. Work out why it’s failing: The issue here is that the function multiplyNumbers expects two arguments (a and b), but only one is being passed (5). As a result, the value of b is undefined, and multiplying any number by undefined results in NaN (Not a Number).

3. Fix the issue: There are two ways to fix this

### Key Learnings

By completing this exercise, you will:

- Learn how to run JavaScript functions.
- Diagnose issues related to how JavaScript handles operators.
- Understand the difference between string concatenation and numeric addition in JavaScript.
- Fix issues in JavaScript code by modifying the function's logic.
- User Story

### User Story

As a beginner JavaScript developer, I want to understand how to fix common issues in functions, so I can confidently troubleshoot errors in my code.

### Acceptance Criteria

Understand the Issue:

Explain why the current function doesn't return the expected result.

Fix the Function so that when 2 numbers are passed, they are correctly multiplied and returned

### Hint

There are 2 ways to fix this, for the second, Google JavaScript default parameters
