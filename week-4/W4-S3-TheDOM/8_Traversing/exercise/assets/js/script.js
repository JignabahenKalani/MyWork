
// const listItems = document.querySelectorAll('li');
// listItems.forEach(item => {
//     item.style.color = 'blue';
// });

var listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'blue';
}

var h2El= document.querySelector(".widget h2")
h2El.textContent = " Reports"

var widgetEls = document.querySelectorAll('.widget p');
widgetEls[2].textContent= 'Optimise performance metrics here.';

// const firstWidgetHeading = document.querySelector('.widget h2');
// if (firstWidgetHeading) {
//   firstWidgetHeading.textContent = 'Reports';
// }

// // 3. Change the text in the <p> tag in the third widget
// const thirdWidgetParagraph = document.querySelectorAll('.widget p')[2];
// if (thirdWidgetParagraph) {
//   thirdWidgetParagraph.textContent = 'Optimise performance metrics here.';
// }


// const liEls = document.getElementsByTagName(".sidebar ul li");

// for (var i = 0; i < liEls.length; i++) {
// liEls[i].style.backgroundColor = "#0000FF";
// }

// const widgetsEls = document.querySelectorAll(".widget");
// const firstWidgetH2El = widgetsEls[0].querySelector("h2");
// firstWidgetH2El.textContent = "Reports";

// const thirdWidgetPEl = widgetsEls[2].querySelector("p");
// thirdWidgetPEl.textContent = "Optimise performance metrics here.";