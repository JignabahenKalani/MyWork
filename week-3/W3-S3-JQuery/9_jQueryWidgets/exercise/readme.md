# Using jQuery Widgets

## Challenge

Using the provided `index.html` file as a starting point, your task is to add at least **two additional widgets** from the jQuery UI library to your page to enhance its functionality. You can explore a complete list of widgets along with code samples on the [jQuery UI website](https://jqueryui.com/).

## Key Learnings

By completing this exercise, you will:

- Learn what jQuery UI widgets are available and how they can enhance a webpage.
- Understand how to install and integrate jQuery UI widgets into a webpage.
- Practice enhancing a webpage by adding interactive UI components, such as sliders, accordions, date pickers, and more.

## User Story

As a web developer, I want to add interactive and dynamic elements to my webpage by using jQuery UI widgets to improve user experience and functionality.

## Acceptance Criteria

- Install the jQuery UI library and ensure it is included in your project.
- Add **at least two different widgets** from the jQuery UI library (e.g., accordion, datepicker, dialog, progress bar).
- Each widget should be functional and correctly integrated into the webpage.
- Ensure that the widgets do not interfere with the existing functionality of the page.
- Make sure the webpage remains responsive and accessible.

## Getting Started

1. Open the provided `index.html` file.
2. Include the jQuery UI library in your project by adding the following `<link>` and `<script>` tags in the `<head>` section of your HTML:
   ```html
   <link
     rel="stylesheet"
     href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
   />
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
   ```
3. Visit the [jQuery UI website](https://jqueryui.com/) to explore available widgets. Each widget page includes code samples that you can use to integrate into your project.
4. Choose two widgets (for example: `Accordion`, `Datepicker`, `Dialog`, `Progressbar`, etc.) and add them to your HTML file.
5. Use jQuery to initialize and customize the widgets according to your needs.
6. Save and test the page to ensure that the widgets are functional.

## Example

To include an **Accordion** and a **Datepicker**, you can add the following code to your HTML and jQuery setup:

HTML:

```html
<h3>Accordion Widget</h3>
<div id="accordion">
  <h3>Section 1</h3>
  <div>
    <p>Content for section 1.</p>
  </div>
  <h3>Section 2</h3>
  <div>
    <p>Content for section 2.</p>
  </div>
</div>

<h3>Select a Date</h3>
<input type="text" id="datepicker" />
```

JQuery:

```

$(function() {
// Initialize Accordion
$("#accordion").accordion();

// Initialize Datepicker
$("#datepicker").datepicker();
});
```

## Additional Resources

- [jQuery UI Widgets Documentation](https://api.jqueryui.com/category/widgets/)
- [jQuery UI Demos and Code Samples](https://jqueryui.com/)
