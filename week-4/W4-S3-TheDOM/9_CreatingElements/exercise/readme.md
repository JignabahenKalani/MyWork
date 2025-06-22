# Dynamically Creating Elements

## Challenge

In this exercise, you’ll be working on adding elements dynamically to an existing HTML page using JavaScript. Specifically, you’ll add **two new items** to an existing sidebar. Using the example and following the TODO prompts in the `script.js` file, you will:

- **Add two new items** to the sidebar.
- Ensure the new elements appear in the correct locations within the DOM.

### BONUS:

Can you add a **Help link** between the "Reports" and "Settings" links in the sidebar?

## Key Learnings

By completing this exercise, you will learn:

- How to **target elements** in the DOM using JavaScript.
- How to **create new elements dynamically** and add them to the document.
- How to insert new elements at **specific positions** in the existing DOM structure.

## User Story

As a user, I want to see new options appear in the sidebar without reloading the page. These options should be properly positioned so that the interface remains intuitive and easy to navigate. I should be able to see a new "Help" link between "Reports" and "Settings" if I complete the bonus.

## Acceptance Criteria

- Add **two new sidebar items** using JavaScript and DOM manipulation.
- Ensure the new items are dynamically appended in the correct place within the sidebar.
- The **Help link** should appear **between "Reports" and "Settings"** if the bonus is implemented.

## Getting Started

To get started with this exercise:

1. Open the provided `index.html` file and examine the current structure of the sidebar.
2. Look for the **TODO prompts** in the `script.js` file.
3. Write JavaScript code to:
   - Select the appropriate part of the sidebar.
   - **Create new elements** using `document.createElement()`.
   - **Add the new items** into the sidebar by appending or inserting them at the correct locations.
4. Complete the BONUS by adding a "Help" link between "Reports" and "Settings."

## Hints

- Use `document.createElement()` to create new DOM elements.
- You can use `appendChild()` or `insertBefore()` to place new elements in the desired location.
- `querySelector()` or `getElementById()` will help you select specific parts of the DOM to work with.
- Pay attention to the order of items in the sidebar to ensure the **Help** link is inserted correctly.

## Useful Resources

- [MDN Web Docs: createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Web Docs: appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN Web Docs: insertBefore()](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
