# Improving a Contact Form

## Challenge

In this exercise, you are provided with a typical contact form that includes fields and labels for **Name**, **Email**, **Phone**, and **Message**. Additionally, there is a **Terms and Conditions** hyperlink (a dead link) below the form. Your tasks are:

1. Use **CSS pseudo-elements** to add a small email emoji (✉️) before the word "Email" and a small phone emoji (📞) before the word "Phone".
2. Style the **Terms and Conditions** hyperlink by:
   - Removing the underline from the link.
   - Changing the link color when hovered over.
   - Changing the link color again once the link has been clicked (visited).

## Key Learnings

By completing this exercise, you will learn:

- How to use **CSS pseudo-elements** (`::before` and `::after`) to style specific elements, particularly adding icons or emojis to text.
- How to style **hyperlinks** using different states, such as `:hover` and `:visited`, to create a more user-friendly and interactive design.
- Real-world applications of pseudo-elements and link styling in web development.

## User Story

As a user, I want the contact form to look more visually appealing, with icons in front of the "Email" and "Phone" labels, and a clearly styled "Terms and Conditions" link that changes when I interact with it.

## Acceptance Criteria

### Form:

- The contact form must include the following fields: Name, Email, Phone, and Message.
- The labels "Email" and "Phone" should have small emojis prefixed to them using CSS pseudo-elements.

### Pseudo-elements:

- The "Email" label should have an email emoji (✉️) before the word "Email".
- The "Phone" label should have a phone emoji (📞) before the word "Phone".

### Terms and Conditions Link:

- The "Terms and Conditions" hyperlink should have no underline.
- On hover, the color of the link should change to a different color.
- After clicking (or visiting) the link, the color should change again to indicate it has been visited.

## Useful Resources

To help you complete this task, here are some helpful online resources on pseudo-elements and link styling:

1. [Pseudo-elements - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)  
   Comprehensive guide on how to use CSS pseudo-elements like `::before` and `::after` to insert content.

2. [Styling Links - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)  
   Learn how to style links with different states, such as `:hover`, `:visited`, and `:focus`.

3. [CSS Pseudo-elements - W3Schools](https://www.w3schools.com/css/css_pseudo_elements.asp)  
   A beginner-friendly introduction to pseudo-elements with examples.

4. [CSS Link States](https://www.w3schools.com/css/css_link.asp)  
   Overview of different link states (`:link`, `:visited`, `:hover`, `:active`) and how to style them.
