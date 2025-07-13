# Python Factorial Calculator

## Challenge

In this exercise, you will create a **Factorial Calculator** in Python. Your function will take a number as input and calculate the factorial by multiplying all whole numbers from the chosen number down to 1.

You will use the **`input()` function** in Python to allow the user to enter their chosen number. The function will then calculate the factorial and print the result.

### Bonus Challenge

As an extra feature, implement a **loop that allows the user to enter another number** and calculate its factorial. Continue looping until the user chooses to quit.

---

## Key Learnings

- How to use **variables** to store data in Python.
- How to create and call **functions** in Python.
- How to implement **loops** to repeat tasks.
- How to use **user input** with the `input()` function.

---

## User Story

**As a user, I want to enter a number and get its factorial so that I can quickly calculate factorials for different numbers.**

---

## Acceptance Criteria

- [ ] The program asks the user for a **number input**.
- [ ] A function calculates the **factorial** of the given number.
- [ ] The result is **printed** in the terminal.
- [ ] The program handles **edge cases** (e.g., non-integer inputs or negative numbers).
- [ ] **Bonus:** The user can calculate multiple factorials until they choose to quit.

---

## Steps to Complete

### 1. Create a Python Script

1. Create a new Python file: `factorial_calculator.py`.
2. Define a function that calculates the factorial of a number.

---

### 2. Implement the Factorial Function

Write a function that calculates the **factorial** using a loop.

### 3. Get User Input and Display the Result

Use the input() function to ask the user for a number and call the factorial function.

```python
num = int(input("Enter a number to calculate its factorial: "))
print(f"The factorial of {num} is {factorial(num)}")
```

### 4. Handle Edge Cases

Modify your script to handle invalid inputs (e.g., non-integer values).

```python
while True:
    user_input = input("Enter a number to calculate its factorial (or type 'quit' to exit): ")

    if user_input.lower() == "quit":
        print("Goodbye!")
        break

    if not user_input.isdigit():
        print("Invalid input. Please enter a positive integer.")
        continue

    num = int(user_input)
    print(f"The factorial of {num} is {factorial(num)}")
```

### Bonus Challenge: Keep Asking for Input

Modify the script so that the user can calculate multiple factorials without restarting the program. Allow them to type 'quit' to exit.

### Hints

Use a loop to allow multiple inputs from the user.
Check for invalid inputs using isdigit() to ensure the user enters a valid number.
Factorial of 0 is always 1, make sure your function handles this correctly.

Good luck! 🐍
