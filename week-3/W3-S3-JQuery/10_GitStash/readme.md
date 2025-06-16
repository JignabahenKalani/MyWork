# Git Stash

## Challenge

This exercise introduces `git stash` as a useful tool for temporarily stashing code changes. Imagine you're working on a new product feature, and you're part way through the implementation but not yet ready to commit and push your changes. Suddenly, your team lead informs you of an urgent bug fix needed on the main product branch. What do you do? This is where `git stash` comes in handy — it allows you to stash your uncommitted changes, switch branches to work on something else, and then return to your feature branch to continue where you left off.

Follow the steps below to create a repository, add some new files, commit and push, then create a new branch and start making changes. You'll use `git stash` to store your unfinished work, switch to the main branch, fix a bug, and later retrieve your stashed changes with `git stash pop`.

## Key Learnings

By completing this exercise, you will:

- Understand how `git stash` works and how to use it to save changes temporarily.
- Learn how to switch branches without losing uncommitted work.
- Experience a real-world development workflow where urgent bug fixes need to be applied while working on other tasks.
- Learn how to retrieve and apply stashed changes after resolving an urgent issue.

## User Story

As a developer, I want to temporarily save my work using `git stash` so that I can switch branches to resolve an urgent bug, and then return to my feature work without losing progress.

## Acceptance Criteria

- Create a Git repository and make some initial commits.
- Create a new branch for a feature and make changes to some files.
- Use `git stash` to stash your changes.
- Switch to the main branch and make modifications for a bug fix.
- Commit and push the changes on the main branch.
- Switch back to the feature branch and use `git stash pop` to retrieve your stashed changes.
- Ensure that your feature branch reflects the changes you made before stashing.

## Getting Started

1. **Initialize the repository:**
   - Create a new directory and initialize it as a Git repository.
   ```bash
   mkdir git-stash-exercise
   cd git-stash-exercise
   git init
   ```
2. **Add and commit some initial files:**

   - Create a couple of files (e.g., index.html and style.css) and add some content.
   - Stage and commit the files.

   ```bash
   git add .
   git commit -m "Initial commit with basic project structure"
   ```

3. **Create a new feature branch:**

   - Create a new branch to work on a feature.

   ```bash
   git checkout -b feature/new-feature
   ```

4. **Make some changes on the feature branch:**

   - Modify or add a file to represent ongoing work on the new feature.
   - You’re not ready to commit these changes yet.

   ```bash
   git add .
   ```

5. **Stash the changes:**

   - Use git stash to stash the uncommitted changes.

   ```bash
   git stash
   ```

6. **Switch back to the main branch:**

   - Switch to the main branch to work on an urgent bug fix.

   ```bash
   git checkout main
   ```

7. **Apply a bug fix on the main branch:**

   - Make changes to any file to represent the bug fix.
   - Stage and commit the fix.

   ```bash
   git add .
   git commit -m "Bug fix on main branch"
   ```

8. **Return to the feature branch:**

   - Switch back to your feature branch.

   ```bash
   git checkout feature/new-feature
   ```

9. **Retrieve the stashed changes:**

   - Use git stash pop to retrieve and apply the stashed changes to the working directory.

   ```bash
   git stash pop
   ```

10. **Verify your changes:**

    - Confirm that the changes from your stash have been successfully applied and continue working on your feature.

## Additional Resources

- [Git Stash Documentation](https://git-scm.com/docs/git-stash)
- [A Visual Guide to Git Stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)
- [Understanding Git Stash for Workflow](https://www.freecodecamp.org/news/git-stash-explained/)
