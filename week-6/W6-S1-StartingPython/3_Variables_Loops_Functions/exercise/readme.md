# Variables, Loops, and Functions in Python

## Challenge

In this exercise, you will explore how **variables, loops, and functions** are implemented in Python compared to JavaScript, which you already know. You will write Python scripts to declare variables, work with different data types, use loop operations, and create and call functions.

---

## Key Learnings

- How to **declare variables** in Python.
- Understanding **different data types** in Python.
- Using **for loops** and **while loops** in Python.
- How to **create and call functions** in Python.
- Comparing Python syntax with JavaScript.

---

## User Story

**As a JavaScript developer, I want to understand how Python handles variables, loops, and functions so that I can write basic Python programs efficiently.**

---

## Acceptance Criteria

- [ ] Declare variables using **Python’s dynamic typing**.
- [ ] Use **at least three different data types** (`int`, `float`, `string`, `list`, etc.).
- [ ] Implement a **for loop** and a **while loop** in Python.
- [ ] Write and call at least **two functions** in Python.
- [ ] Compare the Python syntax with JavaScript by adding comments to your code.

---

## Steps to Complete

### 1. Declare Variables in Python

Create a new Python file (`variables.py`) and define variables of different types. Compare them with JavaScript syntax.

```python
# Python variables (Dynamic typing)
name = "Alice"   # String
age = 25        # Integer
height = 5.6    # Float
is_student = True  # Boolean

# JavaScript equivalent (for comparison)
# var name = "Alice";
# var age = 25;
# var height = 5.6;
# var isStudent = true;

print(name, age, height, is_student)
```

### 2. Use Different Data Types

Modify variables.py to include lists (arrays in JavaScript) and dictionaries (objects in JavaScript).

```python
# Python list (similar to JavaScript arrays)
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Access first element

# Python dictionary (similar to JavaScript objects)
person = {"name": "Alice", "age": 25}
print(person["name"])  # Access value by key
```

### 3. Implement Loops in Python

Create a new file (loops.py) and implement both for loops and while loops.

```python
# Python for loop (similar to JavaScript for loop)
for i in range(5):  # range(5) generates numbers 0 to 4
    print(f"Iteration {i}")

# JavaScript equivalent
# for (let i = 0; i < 5; i++) {
#     console.log(`Iteration ${i}`);
# }

# Python while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# JavaScript equivalent
# let count = 0;
# while (count < 5) {
#     console.log(`Count: ${count}`);
#     count++;
# }
```

### 4. Create and Call Functions in Python

Create a new file (functions.py) and define functions with and without parameters.

```python
# Function without parameters
def greet():
    print("Hello, World!")

# Function with parameters
def add_numbers(a, b):
    return a + b

# Calling the functions
greet()
sum_result = add_numbers(3, 7)
print(f"Sum: {sum_result}")

# JavaScript equivalent
# function greet() {
#     console.log("Hello, World!");
# }
# function addNumbers(a, b) {
#     return a + b;
# }
# greet();
# let sumResult = addNumbers(3, 7);
# console.log(`Sum: ${sumResult}`);
```

## Bonus Challenge

- Modify functions.py to include a function that takes a list of numbers and returns their sum.
- Add error handling to prevent passing non-numeric values.

```python
def sum_list(numbers, count= 1):
    if not all(isinstance(num, (int, float)) for num in numbers):
        return "Error: List must contain only numbers"
    return sum(numbers)

print(sum_list([1, 2, 3, 4]))  # Should return 10
print(sum_list([1, "two", 3]))  # Should return an error message
```

### Hints

- Python does not use var, let, or const like JavaScript. Variables are dynamically typed.
- Python’s for loop iterates over sequences (e.g., lists, ranges). It is different from the traditional C-style loop in JavaScript.
- Indentation is required in Python instead of curly braces {}.
- Python functions use def instead of function keyword.
  Good luck! 🐍
