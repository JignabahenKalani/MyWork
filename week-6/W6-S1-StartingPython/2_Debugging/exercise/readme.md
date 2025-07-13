# 🐍 Debugging and Core Python Concepts

## Challenge

You have been given a Python script with multiple issues, including syntax errors, logic errors, and infinite loops. Your task is to debug the script using **VSCode's debugging tools**, fix the errors, and ensure it runs correctly.

---

## Learning Objectives

By completing this exercise, you will:

- Learn how to debug Python programs using **VSCode breakpoints and step execution**.
- Understand **variables, loops, and functions** in Python.
- Practice **fixing logical and syntax errors** in code.

---

## User Story

**As a beginner Python developer, I want to debug a faulty script so that I can improve my troubleshooting skills and understand Python’s core concepts better.**

---

## Acceptance Criteria

- [ ] The script should execute **without errors**.
- [ ] Variables should be correctly defined and used.
- [ ] The `for` and `while` loops should work **without infinite loops**.
- [ ] Functions should return the correct results.
- [ ] Debugging tools in **VSCode** should be used at least once.

---

## 🔧 Starter Code

Here is the buggy Python script you need to fix:

```python
#  This script contains multiple bugs! Debug and fix them.

def greet(name):
    print("Hello" + name)  # Missing space and indentation issue

def count_to_n(n):
    i = 0
    while i < n:  # Potential infinite loop!
        print(i)
        # Missing increment for i

def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)  # What happens if numbers is an empty list?

# --- Main Execution ---
greet(Alice)  # Undefined variable error

count_to_n(5)  # Should print numbers from 0 to 4

average = calculate_average([])  # Edge case: Empty list
print("Average:", average)
```

## Steps to Complete

- Open the script in VSCode.
- Use breakpoints to inspect variable values and flow.
- Fix the syntax errors and logical bugs.
- Run the script and confirm the output is correct.
- Submit your fixed script with a summary of the issues you found.

## Hints

- Use F5 in VSCode to start debugging.
- Check for missing or incorrect variable names.
- Make sure loops have correct stopping conditions.
- Handle edge cases like empty lists.

# Bonus Challenge

- Modify calculate_average() to return 0 if the list is empty instead of throwing an error.
- Add input validation to prevent users from passing invalid data.

Happy debugging! 🐍
