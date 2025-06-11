# HTML Forms and Buttons

## Challenge

Your challenge is to add a contact form to your portfolio page. The form should allow users to enter their name, email address, and phone number. You will also need to include appropriate buttons for form submission.

## Key Learnings

By completing this exercise, you will:

- Understand the purpose and structure of HTML forms.
- Learn about different types of input fields, including text, email, and phone number fields.
- Gain knowledge on how to implement and style buttons for form submission and other actions.

## User Story

As a web developer, I want to include a contact form on my portfolio page so that potential clients or employers can easily reach out to me.

## Acceptance Criteria

- The contact form is integrated into your existing portfolio page.
- The form includes the following fields:
  - A text input field for the user's name, labeled "Name".
  - An email input field for the user's email address, labeled "Email".
  - A phone number input field, labeled "Phone Number".
- The form includes a submit button labeled "Submit".
- The form is properly structured using `<form>` and `<input>` elements in HTML.
- The submit button should be a `<button>` element or an `<input type="submit">`.
- The form should be visually aligned and styled consistently with the rest of your portfolio page.

## Steps to Complete

1. **Set Up Your HTML Form**:

   - Open the HTML file for your portfolio page.
   - Inside the `<body>` tag, create a new `<form>` element to contain your contact form.

2. **Add Input Fields**:

   - Inside the `<form>` element, add a `<label>` and an `<input>` element for the user's name. Use `type="text"` for the input field.
   - Add another `<label>` and `<input>` element for the user's email. Use `type="email"` for the input field.
   - Add a `<label>` and `<input>` element for the phone number. Use `type="tel"` for the input field.

3. **Add a Submit Button**:

   - Below the input fields, add a `<button>` element or an `<input type="submit">` to serve as the submit button.
   - Label the button "Submit".

4. **Style the Form**:

   - Use CSS to style the form and its elements so that it blends well with your portfolio page design.
   - Ensure that the form is user-friendly and accessible.

5. **Test the Form**:
   - Open your portfolio page in a browser.
   - Test the form by entering sample data and clicking the submit button (even though the form won’t submit anywhere without a backend, you should ensure that the fields behave as expected).

## Additional Resources

- [MDN Web Docs: HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [Introduction to HTML Forms](https://www.w3schools.com/html/html_forms.asp)
- [Styling HTML Forms with CSS](https://css-tricks.com/almanac/selectors/a/attribute/)

---

Happy coding!
