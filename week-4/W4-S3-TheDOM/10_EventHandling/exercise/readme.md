# Implementing Event Handlers

## Challenge

To get you prepared for this week's challenge, in this exercise, you will be implementing a **button event handler** to handle click events. When the button is clicked, your code will:

1. **Read the search text** from an input field on the page.
2. **Validate** that text has been entered (non-empty).
3. Add the valid search text to a **list of searches** displayed on the page.

The goal is to practice handling events, manipulating the DOM, and performing basic form validation.

## Key Learnings

By completing this exercise, you will learn:

- How to handle **click events** using event handlers.
- How to **manipulate the DOM** to dynamically add new elements.
- How to perform basic **input validation** in JavaScript.
- How to append valid input as a new item to a list on the page.

## User Story

As a user, I want to be able to enter text into a search bar, click a button, and have my search term added to a list below the search bar. The search term should not be added if I don’t enter anything into the search field.

## Acceptance Criteria

- The button should trigger an event handler when clicked.
- The event handler should:
  1. **Read the input** value from the search field.
  2. **Validate** that the input is not empty.
  3. Add the valid input to the list of previous searches on the page.
- The search list should **update dynamically** each time a new valid search is added.
- The user should see an error message if they attempt to submit an empty search.

## Getting Started

To begin, follow these steps:

1. Open the provided `index.html` and `script.js` files.
2. Identify the **search input field** and **button** in the DOM.
3. In `script.js`, write the event handler that:
   - Captures the click event on the button.
   - Reads the value of the search input.
   - Validates the input to ensure it's not empty.
   - If valid, creates a new list item and appends it to the list of searches.
4. Ensure that each new search term is added without reloading the page.

## Hints

- Use `addEventListener()` to attach the click event handler to the button.
- Use `document.querySelector()` or `getElementById()` to access the input field and list.
- `input.value` can help you retrieve the value from the input field.
- Use `document.createElement()` to create a new `<li>` element for the search list.
- Append the new search term using `appendChild()`.

## Useful Resources

- [MDN Web Docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Form Data Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [MDN Web Docs: DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
