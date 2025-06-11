# Git Collaboration

## Challenge

In this exercise, your breakout room group will practice collaborating on a project using **GitHub**. One group member will create a new GitHub repository called `10_Git-Collaboration`, and the rest of the team will be added as collaborators.

Your group will then:

1. Set up a simple web page in the repository.
2. Each member will create their own **feature branch**, make a small change, and commit it.
3. Perform a **pull request** to merge changes into the main branch.
4. Finally, using the terminal, delete your feature branch after merging.

## Key Learnings

By completing this exercise, you will:

- Learn how to collaborate effectively using **GitHub**.
- Understand how to create and manage **branches** in Git.
- Gain hands-on experience with **pull requests** and **merging** changes.
- Learn how to clean up by removing old branches after they’ve been merged.

## User Story

As a team member, I want to create feature branches and perform pull requests to merge my changes into the main branch, so that I can collaborate effectively on a shared codebase with my teammates.

## Acceptance Criteria

1. **Repository Setup:**
   - One group member creates a GitHub repository called `10_Git-Collaboration`.
   - This member must give collaborator access to all other group members through the repo’s settings.
2. **Initial Commit:**

   - One member creates a basic web page (HTML file) and commits it to the main branch.
   - The changes must be pushed to the remote repository on GitHub.

3. **Branch Creation:**
   - Each group member creates their own **feature branch** using the terminal or GitHub desktop.
   - Each member makes a small change to the web page (e.g., adding a paragraph or modifying text).
4. **Commit and Push:**

   - After making changes, each member commits and pushes their changes to their feature branch.

5. **Pull Request:**

   - Each member creates a **pull request** to merge their feature branch into the main branch.
   - Another team member should review the pull request before merging.

6. **Branch Cleanup:**
   - After a successful merge, each member should use the terminal to delete their old feature branch:
     ```bash
     git branch -d <branch-name>
     ```

## Example Flow

1. **Step 1**: One group member creates a GitHub repo called `10_Git-Collaboration` and adds the group as collaborators.
2. **Step 2**: One person creates a simple web page, commits the code, and pushes it to the main branch.
3. **Step 3**: Each team member creates a new branch from the main branch, makes a small change to the web page, commits, and pushes the branch.
4. **Step 4**: Each member opens a pull request and merges their changes after review.
5. **Step 5**: Each member deletes their feature branch after the merge is complete.

## Resources

- [GitHub: Managing branches](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches)
- [GitHub: Collaborating with issues and pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests)
- [Git Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
