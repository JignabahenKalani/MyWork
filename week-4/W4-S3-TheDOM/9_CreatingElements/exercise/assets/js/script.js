// TODO: Add 2 new items to the sidebar called "Register" and "Help".

var mainContentEl = document.querySelector(".main-content");
var sideBarEl = document.querySelector(".sidebar ul");

// // create a new div element
// var newDivEl = document.createElement("div");
// newDivEl.className = "widget";

// // Create the Heading 2 and Paragraph elements
// var newH2El = document.createElement("h2");
// newH2El.textContent = "New Widget Title";

// var newPEl = document.createElement("p");
// newPEl.textContent = "This is the text of the new widget";

// // append the new elements to the new div
// newDivEl.appendChild(newH2El);
// newDivEl.appendChild(newPEl);

// // append the new div to the main content
// mainContentEl.appendChild(newDivEl);

var newItem1 = document.createElement("li",sideBarEl);
newItem1.textContent = "Register";
sideBarEl.appendChild(newItem1);

var newItem2 = document.createElement("li");
newItem2.textContent = "Help";
sideBarEl.appendChild(newItem2);

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?
