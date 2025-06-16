# CSS Resets, Media Queries, and CSS Grid: Putting It to the Test

## Challenge

You've learned what **CSS Resets** are, how **Media Queries** work, and have seen examples of **CSS Grid** on some web pages. Now it's time to put your knowledge to the test!

For this challenge, you will take the web page from **Exercise 3 - CSS Grid** and improve it by:

- Implementing a **CSS Reset stylesheet**.
- Adding **Media Queries** to ensure a responsive user experience on different screen sizes.
- Adjusting the Grid so that it better fits a smaller screen
- Identifying elements that do not work well on smaller mobile screens and adjusting or finding alternative ways to make them more suitable.

Remember, in the real world, not every element will perfectly translate to mobile screens, especially when dealing with legacy code. Part of the challenge is identifying these limitations and applying your skills to find better solutions.

### Objective

- Add a **reset.css** stylesheet to remove default browser styles and improve consistency.
- Use **media queries** to make the layout responsive across different screen sizes.
- Spot elements that do not adapt well on smaller screens, and **refactor** them for a better user experience.
- Maintain the use of **CSS Grid** for layout organization.

## Key Learnings

By completing this exercise, you will:

- Practice using **CSS resets** to ensure consistent styling across browsers.
- Apply **media queries** to create responsive layouts that adapt to various screen sizes.
- Understand how **CSS Grid** works in a responsive environment.
- Develop the ability to **identify potential limitations** of HTML elements and think critically about solutions.

## User Story

As a developer, I want to ensure that my web page is responsive and user-friendly across different screen sizes, so users on all devices have an optimal experience. I also need to identify any limitations of certain HTML elements on smaller screens and find alternatives to improve usability.

## Acceptance Criteria

- A **CSS Reset** must be correctly applied to the web page to remove default browser styles.
- **Media Queries** must be added to ensure the page adjusts for both large and small screens.
- The layout should still be structured using **CSS Grid**, but should adjust based on screen size.
- Any HTML elements that do not work well on mobile screens should be identified and refactored for better usability (e.g., larger touch areas, removing unnecessary elements on small screens).

## Instructions

1. **Start with Exercise 3 - CSS Grid**: Open the existing project and examine the current layout and styles.
2. **Add a CSS Reset**: Create or download a reset stylesheet (`reset.css`), and link it at the top of your HTML file, before any other CSS files.
3. **Implement Media Queries**:
   - Adjust the layout for mobile screens (typically, screens less than 768px wide) using media queries.
   - Test different screen sizes by resizing your browser or using your browser's developer tools.
4. **Spot the Issues**: Review the elements on the page and identify any that do not display well on smaller screens.
5. **Refactor for Mobile**:
   - Use media queries to hide or modify problematic elements.
   - Ensure text, buttons, and interactive elements are sized appropriately for mobile users.
6. **Test the Layout**: Check the layout on a variety of screen sizes, from desktop to mobile.

## Additional Resources for Learning CSS Grid and Media Queries

To further enhance your understanding of CSS Grid, here are some excellent online resources:

1. **MDN Web Docs - CSS Grid Layout**  
   The official Mozilla Developer Network (MDN) documentation on CSS Grid Layout. It provides in-depth explanations, examples, and guides.  
   [MDN CSS Grid Layout Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

2. **CSS-Tricks - A Complete Guide to Grid**  
   This guide from CSS-Tricks breaks down all the features of CSS Grid, including properties, values, and practical examples.  
   [CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

3. **Grid by Example**  
   A collection of CSS Grid examples, tutorials, and tools created by Rachel Andrew, a leading expert on the topic.  
   [Grid by Example](https://gridbyexample.com/)

4. **CSS Grid Garden**  
   An interactive game to practice and reinforce your knowledge of CSS Grid. This is a fun way to learn the grid concepts while playing.  
   [CSS Grid Garden](https://cssgridgarden.com/)

5. **YouTube - CSS Grid Crash Course by Traversy Media**  
   A beginner-friendly video crash course on CSS Grid, offering a hands-on approach to learning the essentials.  
   [CSS Grid Crash Course - Traversy Media](https://www.youtube.com/watch?v=0xMQfnTU6oo)

To help you complete this task, here are some useful online resources to learn more about CSS positioning:

1. [Using media queries - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

2. [W3 Schools - Responsive Web Design - Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

Good luck and happy coding!
