# Introducing jQuery

## Challenge

In the example `index.html` file, you'll see that when the button is clicked, one of the elements on the page changes color. Your challenge is to follow the instructions and use jQuery to change other elements on the page when their respective buttons are clicked. You will use jQuery to manipulate the DOM by updating the color, positioning, disabled states, borders, and more.

## Key Learnings

By completing this exercise, you will:

- Learn how jQuery can be used to interact with and manipulate elements on a web page.
- Understand how to use jQuery to change the state of elements such as colors, positions, borders, and disabled states.
- Gain experience in attaching click events to HTML elements with jQuery.
- Practice using jQuery selectors to target specific HTML elements.

## User Story

As a web developer, I want to use jQuery to dynamically update the style and state of HTML elements on my webpage when users interact with buttons.

## Acceptance Criteria

- When a button is clicked, the corresponding element on the page should change.
- Use jQuery to manipulate the CSS properties of elements on the page.
- At least three different elements should be manipulated via jQuery.
- The changes should be triggered by user interaction, such as clicking buttons.

## Getting Started

1. Open the provided `index.html` and `style.css` files.
2. Include jQuery in the project by adding the following `<script>` tag in the `<head>` section of `index.html`:
   ```html
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   ```
3. Identify the elements in the HTML file that you want to manipulate when their corresponding buttons are clicked.
4. Use jQuery's `click()` event to attach functionality to each button.
5. Inside the event handlers, use jQuery to manipulate properties like `css()` for colors, `attr()` for disabling inputs, and `animate()` for positioning elements.
6. Follow the TODO prompts to change the associated elements as required
7. Save your changes and refresh the page to test the interactions.

## Example

If there is a button labeled "Change Color" and an element with the class `.box`, use jQuery to change the color of the `.box` element when the button is clicked:

```javascript
$(document).ready(function () {
  $("#changeColorButton").click(function () {
    $(".box").css("background-color", "blue");
  });
});
```

## Hint

Note how jQuery uses CSS style element selectors to select the elements on the page, for example #box1 to select the div with an ID of box1.

Note the last TODO, how might be select all elements using a different selector and apply a change?

## Useful resources

2. W3Schools - jQuery Selectors
   [https://www.w3schools.com](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)
