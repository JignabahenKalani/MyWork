# CSS Selectors

## Challenge

You have been provided with a web page example that includes an external stylesheet. This stylesheet styles different elements on the page using various CSS selectors. Your challenge is to review the stylesheet and add comments that identify which CSS selectors are being used and what elements they target.

## Key Learnings

By completing this exercise, you will:

- Learn about different types of CSS selectors and how they are used to style HTML elements.
- Understand how element selectors, class selectors, ID selectors, and other types of selectors can be applied in CSS.
- Practice commenting code to improve readability and maintainability.

## User Story

As a web developer, I want to understand and document the CSS selectors used in my stylesheet so that I can maintain and update my styles more effectively.

## Acceptance Criteria

- You have identified and commented on each CSS selector used in the stylesheet.
- Comments clearly explain which HTML elements are being targeted by each selector.
- The stylesheet remains functional after comments are added.
- Examples of selectors to be identified include:
  - **Element selectors** (e.g., `p`, `h1`, `a`)
  - **Class selectors** (e.g., `.header`, `.btn`)
  - **ID selectors** (e.g., `#main`, `#footer`)
  - **Attribute selectors** (e.g., `[type="text"]`, `[href^="https"]`)
  - **Pseudo-class selectors** (e.g., `:hover`, `:first-child`)

## Steps to Complete

1. **Review the HTML and CSS Files**:

   - Open the provided HTML file and external stylesheet in your code editor.
   - Examine how the stylesheet is linked to the HTML document and review the structure of the HTML elements.

2. **Identify CSS Selectors**:

   - Go through the stylesheet line by line and identify each selector.
   - Consider what type of selector is being used (element, class, ID, attribute, pseudo-class, etc.).

3. **Add Comments**:

   - Add comments above each CSS rule in the stylesheet that describe the type of selector and which HTML elements it targets.
   - Example:

     ```css
     /* Element selector targeting all <p> elements */
     p {
       color: blue;
     }

     /* Class selector targeting elements with class 'header' */
     .header {
       font-size: 24px;
     }
     ```

4. **Test Your Comments**:

   - Save your changes and open the HTML file in a web browser.
   - Ensure that your comments do not interfere with the functionality of the stylesheet.

5. **Submit Your Work**:
   - Submit the updated stylesheet with your comments.
   - Be prepared to discuss the types of selectors you identified and how they are used to style different elements on the page.

## Additional Resources

- [MDN Web Docs: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [W3Schools: CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

---

Happy coding!
