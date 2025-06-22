var a = 5;
var b = "5";
var c = 10;

// 1. Equality (==) - checks if the values are equal (ignores type)
console.log("Equality (5 == '5'):", a == b); // true

// 2. Strict Equality (===) - checks if the values and types are equal
console.log("Strict Equality (5 === '5'):", a === b); // false

// 3. Inequality (!=) - checks if values are not equal (ignores type)
console.log("Inequality (5 != '5'):", a != b); // false

// 4. Strict Inequality (!==) - checks if values or types are not equal
console.log("Strict Inequality (5 !== '5'):", a !== b); // true

// 5. Greater than (>) - checks if left value is greater than the right value
console.log("Greater than (10 > 5):", c > a); // true

// 6. Less than (<) - checks if left value is less than the right value
console.log("Less than (5 < 10):", a < c); // true

// 7. Greater than or equal to (>=)
console.log("Greater than or equal to (10 >= 10):", c >= c); // true

// 8. Less than or equal to (<=)
console.log("Less than or equal to (5 <= 10):", a <= c); // true

/// modulus

var d = 10;

// 9. Modulus (%) - returns the remainder of a division
console.log("Modulus (10 % 3):", d % 3); // 1
