# String Methods

## Challenge

In JavaScript, strings (text-based variables) also come with several built-in methods that can be very useful in various applications. Your challenge is to explore the common string methods by using resources such as documentation and tutorials.

Write JavaScript that demonstrates the use of **at least 3 string methods**. Additionally, think about real-world scenarios where these methods might be useful and incorporate that thinking into your code.

## Key Learnings

- Understanding what string methods are and how they function.
- Familiarizing yourself with commonly used string methods.
- Applying string methods in practical, real-world scenarios.

## User Story

As a JavaScript developer,  
I want to explore and learn common string methods,  
So that I can manipulate and handle text-based data effectively in my applications.

## Acceptance Criteria

1. **String Methods**:

   - Research and utilize at least 3 different string methods.
   - These methods could include, but are not limited to: `toUpperCase()`, `toLowerCase()`, `trim()`, `includes()`, `replace()`, `substring()`, `split()`, `concat()`, `charAt()`.
   - Implement these methods in JavaScript with real-world examples in mind.

2. **Example of Use**:

   - Write a function or a script that uses these methods to manipulate strings in a meaningful way.
   - For example, trimming unnecessary spaces, checking if a certain word is present in a text, replacing words in a string, or formatting text (e.g., converting a name to `Title Case`).

3. **Real-World Scenarios**:

   - Consider where string methods would be useful in actual applications, such as:
     - Cleaning up user input (e.g., trimming spaces from a form field).
     - Searching within text (e.g., checking if a keyword is present in a user query).
     - Formatting output (e.g., making all user names start with a capital letter).

4. **Example**:

   - Here's an example to get you started:
     ```javascript
     const fullName = "  john doe  ";
     const formattedName = fullName
       .trim()
       .split(" ")
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(" ");
     console.log(formattedName); // Outputs: "John Doe"
     ```
   - In this example:
     - `trim()` removes the extra spaces around the string.
     - `split(' ')` turns the string into an array of words.
     - `charAt(0)` gets the first letter of each word, and `toUpperCase()` capitalizes it.
     - `join(' ')` puts the array of words back together into a formatted string.

## Useful resources

- [MDN Web Docs - JavaScript String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  
  Comprehensive documentation for JavaScript string methods, including detailed explanations, syntax, and examples of common methods such as `split()`, `includes()`, `replace()`, and more.

- [W3Schools - JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)  
  A beginner-friendly guide to JavaScript string methods. It provides quick explanations and examples for methods like `substring()`, `toUpperCase()`, `toLowerCase()`, and more.
