var mainContentEl = document.querySelector(".main-content");
var sideBarEl = document.querySelector(".sidebar");

// change the text of the first p tag in the mainContentEl
sideBarEl.childNodes[1].textContent = "My Dashboard";

// which is the same as....
var titleEl = document.getElementById("page-title");

// and this
var titleClassEl = document.querySelector(".title");

// changes the text of the titleClassEl
titleClassEl.textContent = "My Dashboard";

// this is the same as....
mainContentEl.style = "background-color: #ff0000; padding: 20px;";

// this
mainContentEl.backgroundColor = "#00ff00";

// This allows us to select multiple elements
var widgetEls = document.querySelectorAll(".widget");

// iterate over the widgetEls with a regaur for loop
for (var i = 0; i < widgetEls.length; i++) {
  widgetEls[i].style.backgroundColor = "#ffff00";
}
