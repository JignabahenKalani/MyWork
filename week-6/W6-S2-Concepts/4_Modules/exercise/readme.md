# Modularising Files and Functions in Python

## Challenge

In this exercise, you will refactor the methods in the `main.py` file by moving them into their own modules to improve reusability and maintainability. You will then update `main.py` to import the necessary functions from the new modules.

## Key Learnings

- How to organize functions into modules for better code reuse
- Structuring Python projects for maintainability
- Importing and using functions from different modules

## User Story

**As a** Python developer,  
**I want to** refactor a script by organizing functions into separate modules,  
**So that** my code is more modular, reusable, and maintainable.

## Acceptance Criteria

- All functions from `main.py` should be moved to separate module files.
- Each module should contain functions that serve a related purpose.
- `main.py` should import and use the functions from the new module files.
- The refactored code should function exactly the same as the original code.
- The project structure should follow a logical and organized format.

## Suggested Steps

1. Review `main.py` and identify functions that can be moved to separate modules.
2. Create new Python files (modules) and move the functions accordingly.
3. Ensure `main.py` imports the required functions from the new modules.
4. Test the program to confirm it works as expected after the refactor.
5. (Optional) Add a `__init__.py` if you want to organize modules into a package.

## Example Project Structure

```python
project/ │-- main.py │-- math_utils.py │-- string_utils.py │-- file_utils.py
```

Where:

- `math_utils.py` contains math-related functions
- `string_utils.py` contains string manipulation functions
- `file_utils.py` contains file handling functions

Happy coding! 🚀
