# Pseudo Classes and Forms

## Challenge

Using [MDN's documentation on UI pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes) as a reference and guide, build a web page that includes a form utilizing pseudo-classes and pseudo-elements. In the accompanying CSS, you must include comments explaining how each pseudo-class and pseudo-element works and why it was used.

## Key Learnings

By completing this exercise, you will:

- Understand how **pseudo-classes** and **pseudo-elements** work in CSS.
- Learn how to use these to style forms and achieve dynamic functionality.
- Gain insight into how these features can be applied to real-world applications, improving user experience and interface behavior.

## User Story

As a user, I want to see a form on a web page that dynamically reacts based on my input and interaction. The form should change appearance or behavior based on my focus, input validation, and more, providing a smooth and responsive experience.

## Acceptance Criteria

- The form must include the following fields:
  - A text input
  - An email input
  - A password input
  - A dropdown select box
  - A submit button
- You must use the following pseudo-classes in the form's styling:
  - `:focus` - to highlight inputs when they are active.
  - `:hover` - to enhance the button when the user hovers over it.
  - `:valid` and `:invalid` - to show different styles based on whether inputs meet certain criteria (e.g., correct email format).
  - `:required` - to visually indicate which fields are mandatory.
- You must use at least one pseudo-element (`::before` or `::after`) to add decorative content to the form (e.g., an asterisk for required fields).
- Each pseudo-class and pseudo-element in the CSS file must have comments that:
  - Explain what the pseudo-class/element does.
  - Explain how and why you applied it to the form.

## Example Form Flow

1. When the user focuses on an input, the border or background should change.
2. If the input is valid, a success message or style should appear; if invalid, an error style should be shown.
3. Hovering over the submit button should change its appearance (e.g., change color).
4. Required fields should be marked visually, using pseudo-elements or other indicators.

## Resources

- [MDN: UI Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes)
- [MDN: Pseudo-Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
