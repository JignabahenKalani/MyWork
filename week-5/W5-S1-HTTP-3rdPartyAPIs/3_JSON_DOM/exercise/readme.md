# JSON and the DOM

## Challenge

In this challenge, you will explore an example that demonstrates different methods of dynamically updating a web page's content using the DOM. The data used to update the page is retrieved in JSON format from a 3rd Party API.

The example provides **three different techniques** for achieving the same result, and your task is to:

1. Examine how each method works.
2. Compare the techniques to understand their strengths and weaknesses.
3. Decide which approach you prefer and which might be more efficient or suitable depending on the scenario.

## Key Learnings

- Understanding how to use JSON data retrieved from a 3rd Party API to update a web page.
- Exploring different techniques for DOM manipulation and dynamically displaying content.
- Learning to evaluate different coding approaches for their readability, performance, and maintainability.

## User Story

As a developer, I want to dynamically update the content on a web page using data retrieved from an API, so that the page reflects the most up-to-date information. I will study different approaches for DOM manipulation to determine which technique is most effective and appropriate for various use cases.

## Acceptance Criteria

- [ ] You have reviewed three different methods of dynamically updating the DOM using JSON data.
- [ ] You understand how data is fetched from a 3rd Party API and used to populate elements on a web page.
- [ ] You can compare and contrast the methods based on performance, readability, and ease of use.
- [ ] You can justify which method you would choose for different scenarios and why.
- [ ] The web page updates correctly with the data from the API, regardless of which method is chosen.

## Steps to Complete the Exercise

1. **Review the Example Code**:

   - The example includes three different techniques to update the DOM using JSON data.
   - Examine each method carefully, taking note of how the data is fetched, processed, and rendered on the page.

2. **Fetch Data from a 3rd Party API**:

   - The example makes a `fetch` request to a 3rd party API (such as the GitHub API or another free API providing JSON data).
   - Observe how the data is retrieved and how it flows into the DOM update process.

3. **Method 1: Direct DOM Manipulation**:

   - In this method, elements are created and appended to the DOM directly using `document.createElement` and `appendChild`.
   - Pay attention to how each element is created individually and how the JSON data is inserted into these elements.

4. **Method 2: Template Literals and `innerHTML`**:

   - In this approach, template literals are used to create HTML strings and update the DOM using `element.innerHTML`.
   - Study how this method allows for inserting multiple elements at once and consider the potential trade-offs with performance and security.

5. **Method 3: Using a JavaScript Framework/Library**:

   - The third method may use a framework or library such as React, Vue, or a simple templating engine.
   - Observe how the library simplifies DOM updates and how it handles rendering components based on the JSON data.

6. **Compare and Contrast**:

   - After reviewing all three methods, write down the pros and cons of each.
   - Consider factors like:
     - **Performance**: Which is faster, especially when handling large amounts of data?
     - **Readability**: Which is easier to understand and maintain?
     - **Scalability**: Which method would be better for a large project?
     - **Security**: Are there any potential security issues, such as with `innerHTML`?

7. **Make Your Choice**:
   - Based on your analysis, decide which method you would use in a real-world scenario. Provide a brief explanation of your decision.

## Additional Resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [W3Schools - JavaScript Array Map](https://www.w3schools.com/jsref/jsref_map.asp)
