// Button click event
var clickButton = document.getElementById("clickButton");
var clickCountDisplay = document.getElementById("clickCount");

var clickCount = 0;
clickButton.addEventListener("click", function () {
  clickCount++;
  clickCountDisplay.textContent = clickCount;
});

// Key press event
var keyInfo = document.getElementById("keyInfo");
document.addEventListener("keydown", function (event) {
  keyInfo.textContent = `Key: ${event.key}, Code: ${event.code}`;
});

// Scroll event
var scrollBox = document.getElementById("scrollBox");
var scrollPos = document.getElementById("scrollPos");
scrollBox.addEventListener("scroll", function () {
  scrollPos.textContent = scrollBox.scrollTop;
});

// Mouse movement event
var mouseBox = document.getElementById("mouseBox");
var mousePos = document.getElementById("mousePos");
mouseBox.addEventListener("mousemove", function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  mousePos.textContent = `x: ${x}, y: ${y}`;
});
