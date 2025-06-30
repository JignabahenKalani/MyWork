# HTTP and 3rd Party APIs

## Challenge

In this exercise, you will download Postman from the official website and use it to invoke HTTP requests to interact with the GitHub API. The goal is to retrieve data from two different endpoints:

1. A list of repositories for your GitHub username.
2. A list of issues for the Node.js GitHub repository.

You will use a GET request to retrieve JSON data from these endpoints and explore how API requests work using Postman.

## Key Learnings

- Understanding what an HTTP request is and how it works.
- How to use Postman for sending and receiving API requests.
- Working with JSON-formatted data and understanding the response structure.

## User Story

As a developer, I want to use Postman to make HTTP GET requests to a 3rd party API (GitHub) so that I can retrieve data such as repository lists and issues. This will help me understand how APIs work and how to interact with them programmatically.

## Acceptance Criteria

- [ ] You have installed Postman on your computer by visiting the [Postman website](https://www.postman.com/downloads/).
- [ ] You can successfully perform a GET request to the GitHub API to retrieve a list of repositories associated with your GitHub username.
  - Endpoint: `https://api.github.com/users/<your-username>/repos`
  - Example Response: A list of repositories in JSON format.
- [ ] You can perform a GET request to retrieve a list of issues from the Node.js GitHub repository.
  - Endpoint: `https://api.github.com/repos/nodejs/node/issues`
  - Example Response: A JSON array containing details of issues such as title, status, and author.
- [ ] You can explain the structure of an HTTP request, including method (GET), headers, and body (if applicable).
- [ ] You understand the basics of JSON data formatting and how to navigate through the JSON response data.

## Steps to Complete the Exercise

1. **Download Postman**:
   - Go to the [Postman download page](https://www.postman.com/downloads/) and follow the installation steps for your operating system.
2. **GitHub API Authentication (optional)**:
   - While this exercise uses public endpoints, some GitHub API requests may require authentication. If necessary, you can create a GitHub token by following [these instructions](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
3. **Make a GET Request to Retrieve Your Repositories**:

   - Open Postman and set the request type to `GET`.
   - Use the endpoint: `https://api.github.com/users/<your-username>/repos`.
   - Hit "Send" and observe the JSON response that contains your repository data.

4. **Retrieve Issues from Node.js Repository**:

   - In Postman, create another `GET` request using the endpoint: `https://api.github.com/repos/nodejs/node/issues`.
   - Hit "Send" and review the list of issues in JSON format.

5. **Review and Explore JSON Data**:
   - Examine the structure of the JSON data returned by the GitHub API, paying attention to key-value pairs such as `id`, `name`, `full_name`, and `issues`.

## Additional Resources

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Postman Learning Center](https://learning.postman.com/docs/getting-started/introduction/)
