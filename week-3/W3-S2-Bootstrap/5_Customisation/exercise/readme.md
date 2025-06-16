# Bootstrap Customisation

## Challenge

Bootstrap provides developers with powerful, out-of-the-box layouts, utility classes, and pre-made elements and styles that make scaffolding web pages faster and easier. However, developers often need to customise these default styles and fonts to better fit their specific design needs.

In this exercise, you will create your own stylesheet to override some of Bootstrap's default styles. You will override the following components using custom CSS:

- Header styles
- `btn-primary` and `btn-secondary` buttons
- `text-dark` class
- `bg-secondary` background

To ensure the overrides take precedence, use the `!important` directive in your custom CSS.

## Key Learnings

After completing this exercise, you will:

- Understand how to customise and adapt Bootstrap's default styles.
- Learn how to override Bootstrap's pre-defined classes with custom CSS.
- Gain experience in using the `!important` directive to enforce CSS rules.
- Develop familiarity with Bootstrap's utility classes and structure.

## User Story

As a web developer, I want to customise Bootstrap's default styles to match my project's design requirements, so I can create a unique, branded user interface while still leveraging Bootstrap's efficiency and pre-built components.

## Acceptance Criteria

- A custom CSS stylesheet is created and linked correctly to the HTML page.
- The default Bootstrap styles for the following components are overridden:
  - **Header styles:** The header (`<h1>` or `<header>`) must have customised text color, font size, or other style properties different from the Bootstrap default.
  - **Buttons:** The `btn-primary` and `btn-secondary` buttons should have custom background colors, border styles, and text colors.
  - **Text color:** The `text-dark` class should display a different color when used.
  - **Background color:** The `bg-secondary` class should display a customised background color.
- All overridden styles should make use of the `!important` directive to ensure they take precedence over the default Bootstrap styles.

## Instructions

1. Use the provided HTML page that uses Bootstrap.
2. Create a new custom stylesheet (`styles.css`) and link it to the HTML page.
3. In `styles.css`, override the following Bootstrap classes and elements using custom styles:

- Header styles
- `btn-primary` and `btn-secondary`
- `text-dark`
- `bg-secondary`

4. Ensure that your custom styles are applied by using the `!important` directive where necessary.
5. Test the page to confirm that the default Bootstrap styles are overridden by your custom styles.

## Bonus

- Experiment with overriding additional Bootstrap utility classes to further customise your page.

## Useful Resources for Customising Bootstrap

### 1. [**Official Bootstrap Documentation - Customization**](https://getbootstrap.com/docs/5.3/customize/overview/)

The official Bootstrap docs provide an in-depth guide to customizing the framework, including modifying variables, working with Sass, and adding your own CSS overrides. This should be your first stop to understand Bootstrap's capabilities.

### 2. [**Bootstrap 5 Cheat Sheet**](https://bootstrap-cheatsheet.themeselection.com/)

This interactive Bootstrap cheat sheet provides quick access to all of Bootstrap's classes and components, making it easier to see what you can override and customize.

### 3. [**MDN Web Docs - !important in CSS**](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_important_exception)

To understand when and how to use the `!important` rule effectively when overriding Bootstrap styles, MDN’s documentation on specificity is highly recommended.
