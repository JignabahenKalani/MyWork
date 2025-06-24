var firstName = "John";
var surName = "Smith";

// const surName = "Doe";
// surName = "Doe";

var age = 25;
var retirementAge = 67;

console.log("you" + " " + "can" + "add" + " " + "strings" + " " + "together");

console.log(`or use template literals to output details for Mr. ${surName} `);

// TODO: log out the full name "John Smith" by concatenating the variables firstName and surName

console.log("Full name: " + firstName + " " + surName); //or 

var fullName= firstName + " " + surName;
console.log(fullName)


// TODO: log out "John Smith and I amd 25 years old"

console.log( firstName + " " + surName + " and I  and " + age + " years old");

// TODO: Create a variable to store the number of years until retirement
 
var yearsUntilretirement = retirementAge-age;

// TODO: log out "I have 42 years until retirement"

console.log(" I have " + yearsUntilretirement + " years unitl retirement");
