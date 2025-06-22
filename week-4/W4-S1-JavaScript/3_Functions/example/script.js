function greet1(dave) {
  console.log(`Hello, ${dave} from a regular function!`);
}

var greet2 = function () {
  console.log("Hello, World!");
};

var greet3 = () => {
  console.log("Hello, World from an arrow function!");
};

greet1();
greet2();
greet3();

var number1 = 5;
var number2 = 10;
var result = add(number1, number2);
console.log(result);

// This is a function that takes two arguments/parameters and returns their sum
function add(number1, number2) {
  return number1 + number2;
}

/*
function log(message) {
  console.log(message);
}
*/
