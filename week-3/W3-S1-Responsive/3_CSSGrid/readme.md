# Understanding CSS Grid

## Challenge

In this exercise, you'll be working with a basic todo task dashboard that uses CSS Grid to layout the page with key areas: the header, task list, sidebar menu, and footer. Your goal is to understand how different CSS Grid properties like `grid-template-areas`, `grid-template-columns`, `grid-template-rows`, and `gap` affect the layout and responsiveness of the dashboard. You'll answer questions and make adjustments to the grid to see how changes affect the structure and design.

### Questions to Explore:

1. **Grid Layout Understanding**:

   - **Question**: In the `.dashboard-container` grid, how are the areas "header", "sidebar", and "main" laid out on the page? How does the `grid-template-areas` property affect the structure, and what would happen if you removed this property?

2. **Grid Tracks and Flexibility**:

   - **Question**: The `grid-template-columns: 250px 1fr;` is used to define the width of the sidebar and the main content area. What do the values `250px` and `1fr` represent, and how does the `1fr` unit differ from using a fixed width like `500px` for the second column?

3. **Grid Rows and Auto Sizing**:

   - **Question**: The CSS sets `grid-template-rows: auto 1fr;` in the `.dashboard-container`. What do `auto` and `1fr` do for the height of the rows, and how would changing `1fr` to `auto` affect the layout?

4. **Responsive Design and Adjustments**:

   - **Question**: The current grid layout divides the page into two columns with a sidebar and main content. How would you modify the grid to create a single-column layout (with the header, sidebar, and main content stacked vertically) on smaller screen sizes (e.g., for mobile devices)?

5. **Grid Gaps and Spacing**:
   - **Question**: The `.dashboard-container` grid uses a `gap: 10px;` property. What effect does this property have on the layout? How would you change the CSS if you wanted to have a 10px horizontal gap between columns but no gap between rows?

---

## Key Learnings

By completing this exercise, you will:

- Understand how to define and manipulate grid layouts using `grid-template-areas`.
- Learn how grid tracks (columns and rows) work with units like `fr`, `px`, and `auto`.
- Gain insights into auto-sizing in grids and how it affects responsiveness.
- Explore ways to adjust grid layouts for different screen sizes, focusing on mobile responsiveness.
- Experiment with `gap` properties to manage spacing between grid elements.

---

## User Story

As a developer, I want to learn how CSS Grid works by building and adjusting a todo task dashboard. I will explore how grid areas are laid out and how to manipulate the size, spacing, and responsiveness of the layout to better understand grid-based design.

---

## Acceptance Criteria

### Grid Layout Understanding:

- I can explain how `grid-template-areas` works and describe how the header, sidebar, and main areas are laid out.
- If I remove the `grid-template-areas` property, I can observe how the layout changes.

### Grid Tracks and Flexibility:

- I understand what `250px` and `1fr` represent in `grid-template-columns`.
- I can explain the difference between using `1fr` and a fixed width (e.g., 500px) for a column.

### Grid Rows and Auto Sizing:

- I can describe the function of `auto` and `1fr` in `grid-template-rows` and know how changing `1fr` to `auto` would affect the layout.

### Responsive Design and Adjustments:

- I can modify the grid layout to stack the header, sidebar, and main content vertically on smaller screens (e.g., by using media queries).

### Grid Gaps and Spacing:

- I can explain the effect of `gap: 10px;` and know how to change it to create a horizontal gap between columns with no gap between rows.

---

## Getting Started

1. Clone the provided repository with the base dashboard code.
2. Open the project in your favorite editor.
3. Modify the CSS grid layout according to the questions and tasks provided.
4. Observe the changes in the browser and answer the questions in a separate file.

---

## Additional Resources for Learning CSS Grid

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

---

Good luck and happy coding!
