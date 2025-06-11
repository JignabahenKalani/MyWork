# Working with CSS Positioning

## Challenge

In this exercise, you'll be provided with a generic landing page that includes basic navigation, a header, three action boxes, a footer, and a banner graphic. Additionally, a "Get in Touch" graphic will be incorrectly placed in the middle of the page. Your task is to:

1. **Fix the position of the "Get in Touch" graphic** so that it is correctly positioned at the bottom-right of the viewport and remains there even when the page is scrolled (`position: fixed`).
2. **Fix the main navigation menu** so that it stays fixed at the top of the page while scrolling.

## Key Learnings

By the end of this exercise, you should understand:

- How to use various CSS positioning properties like `static`, `relative`, `absolute`, and `fixed`.
- Practical use cases for CSS positioning, including sticky headers and fixed buttons for user interaction.
- How to use `top`, `right`, `bottom`, and `left` properties to position elements based on viewport and container size.

## User Story

As a developer, I want to understand how to properly position elements on a webpage, so that I can ensure key components like menus and call-to-action buttons are accessible and visible even when the page is scrolled.

## Acceptance Criteria

### Navigation Menu:

- The navigation menu should be fixed at the top of the page.
- The navigation menu must stay visible at the top as the user scrolls down the page.
- The menu should not overlap or distort other content on the page.

### "Get in Touch" Graphic:

- The "Get in Touch" graphic must be positioned in the bottom-right corner of the page.
- The graphic should remain fixed in the bottom-right corner, even when the user scrolls.
- The graphic should not overlap important content, and there should be adequate padding from the edge of the screen.

### General:

- No other elements should shift out of their intended positions due to the new CSS changes.
- The page should remain visually coherent on different screen sizes and while scrolling.

## Useful Resources

To help you complete this task, here are some useful online resources to learn more about CSS positioning:

1. [CSS Positioning - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position)  
   A comprehensive guide to understanding all the CSS `position` values, with examples and explanations.

2. [CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)  
   A beginner-friendly tutorial on CSS positioning with clear examples and explanations.

3. [CSS Sticky Positioning - CSS Tricks](https://css-tricks.com/position-sticky-2/)  
   A guide on how to use the `position: sticky` property for elements like sticky headers.

4. [Understanding CSS Z-Index - Smashing Magazine](https://www.smashingmagazine.com/2014/09/understanding-z-index-css/)  
   Learn how the `z-index` works to ensure elements are layered properly when using positioning.
