# Flexbox Alignment

## Challenge

In this exercise, you will explore the different alignment options provided by **Flexbox**. Using the example page and stylesheet provided, you will experiment with the `justify-content`, `align-items`, and `flex-direction` properties. Your goal is to understand how Flexbox manages spacing and alignment along the main and cross axes.

You will use both CSS and the browser's Element Inspector to dynamically adjust the layout. Initially, the `flex-direction` is set to `row` (horizontal axis). Experiment with changing it to `column` and observe how it affects the layout and the orientation of the Flexbox axes.

## Key Learnings

By completing this exercise, you will:

- Understand how the **Flexbox axis** works and how it affects layout behavior.
- Learn how the properties `justify-content` and `align-items` manage the spacing and alignment of Flexbox items.
- Explore how changing `flex-direction` impacts the layout by altering the main and cross axes.
- Gain practical experience using your browser's Developer Tools to experiment with and debug CSS.

## User Story

As a web developer, I want to understand how Flexbox's `justify-content`, `align-items`, and `flex-direction` properties work, so that I can control the alignment and spacing of elements in responsive layouts.

## Acceptance Criteria

- You must explore the following Flexbox properties:
  - `justify-content`: Controls alignment along the **main axis** (horizontal when `flex-direction` is set to `row`).
  - `align-items`: Controls alignment along the **cross axis** (vertical when `flex-direction` is set to `row`).
  - `flex-direction`: Determines the direction of the main axis (set to `row` or `column`).
- Experiment with changing `justify-content` and `align-items` in both `row` and `column` modes to understand their effects.
- Use the browser's **Element Inspector** to test and adjust the CSS in real time.
- Add comments in the CSS file explaining how the changes you make affect the layout and why.

## Example Flow

1. **Step 1**: Start with the provided example page and CSS.
2. **Step 2**: Experiment with `justify-content` values like `flex-start`, `flex-end`, `center`, `space-between`, and `space-around` to see how the boxes align along the main axis.
3. **Step 3**: Test different `align-items` values, such as `flex-start`, `center`, `stretch`, and `flex-end`, to see how the items align along the cross axis.
4. **Step 4**: Change `flex-direction` from `row` to `column`. How does this change the behavior of `justify-content` and `align-items`?
5. **Step 5**: Document your findings in comments in the CSS, explaining how each property changes the layout.

## Resources

- [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Web Docs: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- Use your browser's **Element Inspector** (Right-click → Inspect Element) to test and modify styles dynamically.
