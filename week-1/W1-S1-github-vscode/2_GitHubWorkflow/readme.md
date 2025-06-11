# GitHub Workflow

## Challenge

Your challenge is to create a new repository on GitHub, clone it to your local machine, add a Markdown file, then commit and push your changes back to the GitHub repository.

## Key Learnings

By completing this exercise, you will:

- Gain an understanding of what GitHub is and how it is used for version control and collaboration.
- Learn how to create a new repository on GitHub.
- Practice cloning a GitHub repository to your local machine.
- Learn to add files to a repository, commit changes, and push updates back to GitHub.

## User Story

As a developer, I want to efficiently manage and track changes in my projects using GitHub so that I can collaborate with others and maintain a history of my work.

## Acceptance Criteria

- A new repository is created on your GitHub account with a meaningful name.
- The repository is cloned to your local machine using the Terminal or a Git client.
- A new Markdown file (`example.md`) is created in the local repository.
- The file is staged, committed, and pushed to the remote GitHub repository.
- The GitHub repository is updated with the new file and the commit history reflects the change.

## Steps to Complete

1. **Create a New Repository on GitHub**:

   - Log in to your GitHub account.
   - Click on "New Repository" and fill in the required details (repository name, description, etc.).
   - Initialize the repository with a `README.md` file if desired.

2. **Clone the Repository Locally**:

   - Copy the repository URL from GitHub.
   - Open your Terminal or Git client and run the `git clone <repository-url>` command to clone the repository to your local machine.

3. **Create a New Markdown File**:

   - Navigate to the cloned repository directory using the Terminal.
   - Create a new file named `example.md` using the `touch` command or any text editor.

4. **Stage and Commit the Changes**:

   - Use `git add example.md` to stage the new file.
   - Commit the file using `git commit -m "Add example.md"`.

5. **Push the Changes to GitHub**:

   - Use `git push origin main` (or `master`, depending on your default branch) to push the committed changes back to the GitHub repository.

6. **Verify the Update on GitHub**:
   - Go back to your GitHub repository page and confirm that the `example.md` file is now present and the commit history shows your latest commit.

## Additional Resources

- [GitHub Documentation: Getting Started](https://docs.github.com/en/get-started)
- [Markdown Guide](https://www.markdownguide.org/)

---

Good luck, and happy coding!
