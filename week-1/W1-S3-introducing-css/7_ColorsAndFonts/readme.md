# Understanding Standard Browser Fonts and Colors in CSS

## Challenge

In this exercise, you will enhance a basic HTML page by applying standard browser fonts and colors using CSS. Your task is to style the text fonts, text colors and background of the boxes by choosing appropriate fonts and colors that improve readability and aesthetic appeal.

You'll also need to think about how to target each box and which type of CSS selector to use.

## Key Learnings

By completing this exercise, you will:

- Understand how to apply standard web-safe fonts to your HTML elements using CSS.
- Learn how to set text and background colors using CSS properties.
- Explore the importance of contrast and readability in web design.

## User Story

As a web developer, I want to apply standard fonts and colors to my web page using CSS so that the text is readable and the page is visually appealing.

## Acceptance Criteria

- The HTML page has been styled using CSS to apply standard fonts and colors.
- Web-safe fonts are used for the main text elements (e.g., `body`, `h1`, `p`).
- The background color and text color combinations are chosen for optimal contrast and readability.
- CSS properties such as `font-family`, `color`, and `background-color` are correctly implemented.
- The CSS is organized and well-commented to explain the choices made for fonts and colors.

## Steps to Complete

1. **Review the HTML Structure**:

   - Open the provided HTML file in your code editor. Familiarize yourself with the structure, including headings, paragraphs, and other text elements.

2. **Choose Web-Safe Fonts**:

   - Research web-safe fonts that are commonly supported across different browsers. Examples include `Arial`, `Verdana`, `Times New Roman`, `Georgia`, and `Courier New`.
   - Apply a default font to the `body` element using the `font-family` property.
   - Apply different fonts to headings (`h1`, `h2`, etc.) and paragraphs (`p`) to create a visual hierarchy.

3. **Set Text and Background Colors**:

   - Choose a background color for the page using the `background-color` property. Consider using light, neutral tones to ensure the text is readable.
   - Set the text color using the `color` property. Ensure there is enough contrast between the text and background for accessibility.

4. **Implement CSS Styles**:

   - Create a new external CSS file or add styles directly to the `<style>` section in your HTML file.
   - Apply the chosen fonts and colors to the appropriate elements.
   - Example:

     ```css
     /* Apply a web-safe font to the entire page */
     body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
       color: #333333;
     }

     /* Set a different font for headings */
     h1 {
       font-family: Georgia, serif;
       color: #2c3e50;
     }

     /* Style paragraphs with a web-safe font */
     p {
       font-family: "Verdana", sans-serif;
       color: #555555;
     }
     ```

5. **Test and Refine**:

   - Save your CSS and refresh the HTML page in your web browser to see the changes.
   - Adjust the fonts and colors as needed to improve the page's visual appeal and readability.

6. **Submit Your Work**:
   - Submit the HTML and CSS files. Be prepared to explain your font and color choices and how they enhance the readability and design of the page.

## Additional Resources

- [CSS Fonts](https://www.w3schools.com/css/css_font.asp)
- [Web Safe Fonts](https://www.cssfontstack.com/)
- [CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

---

Happy styling!
