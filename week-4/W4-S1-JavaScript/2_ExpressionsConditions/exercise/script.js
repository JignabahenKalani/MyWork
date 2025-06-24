// JavaScript Expressions and Conditions Exercise

// 1. Variable Declaration and Assignment
let num1 = 10; // A number
let num2 = "10"; // A string with a numeric value
let isTrue = true; // A boolean

// 2. Using Comparison Operators

// Comparison using '>'
let isGreater = num1 > 5; // Checks if num1 is greater than 5
console.log("Is num1 greater than 5?", isGreater); // true

// TODO: Comparison using '<='

let islessthan = num1 <= 15; // checks num1 is lessthan or equal to 15;
 
console.log("Is num1 is lessthen or equal to 15?",islessthan); // true

// 3. Strict vs. Value Comparison

// TODO: Value comparison using '=='

console.log("Is num1 == num2 :", num1 == num2); //true

// TODO: Strict comparison using '==='
 
console.log("Is num1 === num2 : ", num1 === num2); //false

// 4. Conditional Statements

if(num2 === 10){
  console.log("num2 is == 10");
} else{
  console.log("num2 is not equal to 10");
}

// Example of an if/else condition using a comparison
if (num1 === 10) {
  console.log("num1 is exactly equal to 10 (strict comparison)."); // This block will run
} else {
  console.log("num1 is not exactly equal to 10.");
}

// Another conditional statement to check if num1 is greater than 15

if(num1>15){
  console.log("num1 is grater than 15");
} else{
  console.log("num1 is less than 15");
}

// 5. TODO - Conditional Statements with Logical Operators
if (num2 === "10" && num1 === "10") {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

if (num1 < 15 && (num2 === "10" || num1 === 10)) {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

// TODO: what's the difference between the && and || operators?

//&& operator check both condition

//|| opeator check either one is correct or not

if (num1 === "10" && num2 === "10") {
  console.log("num1 and num2 is exactly equal to '10'.");

} else if (num1 < 20 && (num2 === "10" || num1 === 10)) {
  console.log("num1 is less than 20 and num2 is exactly equal to '10'.");
} else{
    console.log("error");
}

/// TODO: Add a conditional statement to check if num1 is less than 15 and num2 is exactly equal to '10'.
