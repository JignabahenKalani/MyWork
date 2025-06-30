# Working with JSON

## Challenge

In this exercise, you will extend existing code that uses a `fetch` request to call the GitHub API and retrieve a list of repositories for a username entered on the page. The current code loops through the results, but your challenge is to enhance it by adding the following features:

- Log the **full name** of each repository.
- Log whether each repository is **public or private**.
- Display the **avatar URL** and **login** of the repository owner.

As an additional improvement, refactor the code to move this logic into its own function to make the code more modular and readable.

## Key Learnings

- Understanding how to parse and access values from a large JSON response.
- Gaining experience with basic `fetch` requests and handling HTTP responses.
- Practicing code refactoring by organizing logic into functions.

## User Story

As a developer, I want to retrieve repository data from the GitHub API using a `fetch` request so that I can extract specific information like the repository name, privacy status, and owner details. This will help me understand how to work with JSON responses and structure my code in a more modular way.

## Acceptance Criteria

- [ ] You can successfully retrieve a list of repositories from the GitHub API for a given username using a `fetch` request.
  - Endpoint: `https://api.github.com/users/<username>/repos`
  - Example Response: A JSON array of repository objects.
- [ ] The code logs the **full name** of each repository in the console.
- [ ] The code logs whether each repository is **public** or **private**.
- [ ] The code prints the **avatar URL** and **login** of the repository owner.
- [ ] The logic for handling the JSON response and printing data is refactored into a separate function.
- [ ] The code is easy to read and well-organized.

## Steps to Complete the Exercise

1. **Setup the Project**:

   - Ensure you have an HTML page with an input field where a user can enter their GitHub username.
   - The existing code should use the `fetch` API to make a request to the GitHub API and retrieve a list of repositories.

2. **Add Repository Details**:

   - In the response handling section of the code, extract the following fields from each repository object:
     - `full_name`: The full name of the repository.
     - `private`: Whether the repository is private (boolean value).
     - `owner.avatar_url`: The avatar URL of the repository owner.
     - `owner.login`: The login name of the repository owner.
   - Log these values to the console for each repository.

3. **Refactor into a Function**:

   - Move the logic that processes the JSON response into a separate function (e.g., `processRepos(repos)`), making the code more modular and easier to maintain.
   - Ensure that this function takes the JSON array of repositories as an argument and handles the printing of the desired fields.

4. **Test the Code**:
   - Enter a valid GitHub username into the input field and ensure that the repository details (full name, public/private status, avatar URL, and owner login) are logged correctly.
   - Refactor as needed to improve readability and organization.

## Additional Resources

- [GitHub API Documentation - Repositories](https://docs.github.com/en/rest/repos/repos)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Web Docs - Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
