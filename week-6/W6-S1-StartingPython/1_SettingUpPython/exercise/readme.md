# Getting Started with Python

## Challenge

In this exercise, you will **install and set up Python** for use with VSCode, create a **virtual environment**, configure **path variables**, and write your **first Python application**. This will help you get comfortable with your Python development environment.

---

## Key Learnings

- How to **install Python** and configure it in VSCode.
- What a **virtual environment** is and why it’s important.
- How to **set path variables** for Python execution.
- Writing and running a **simple Python application** from the terminal.

---

## User Story

**As a beginner Python developer, I want to set up my Python environment correctly so that I can start writing and executing Python code without issues.**

---

## Acceptance Criteria

- [ ] **Python is installed** on your system and accessible via the terminal.
- [ ] **VSCode is set up** with the Python extension.
- [ ] A **virtual environment is created and activated**.
- [ ] Python **path variables are correctly configured**.
- [ ] A simple **"Hello, World!"** Python script is created and run from the terminal.

---

## Steps to Complete

### 1. Install Python

1. Download and install Python from the official website: [Python Downloads](https://www.python.org/downloads/)
2. Verify installation by running the following command in the terminal:

   ```sh
   python --version
   ```

   or on MacOS

   ```sh
   python3 --version
   ```

### 2. Set Up VSCode for Python

1. Install VSCode if you haven't already: VSCode Download
2. Open VSCode and install the Python extension from the Extensions Marketplace.
3. Open the terminal in VSCode (Ctrl + ~ on Windows/Linux, Cmd + ~ on Mac) and check if Python is detected:

```sh
python --version
```

### 3. Set Up a Virtual Environment

1. Navigate to your project folder:

```sh
mkdir my_python_project
cd my_python_project
```

2. Create a virtual environment:

```sh
python -m venv venv
```

3. Activate the virtual environment

- Windows:

```sh
venv\Scripts\activate
```

- MacOS:

```sh
source venv/bin/activate
```

4. Verify that your virtual environment is active by running:

```sh
python --version
```

### 4. Set Python Path Variables (if necessary)

- If python is not recognized, you may need to add Python to your system’s PATH variable.
- Check Python’s installation location

```sh
where python  # Windows
which python  # Mac/Linux
```

- Add this path to your system’s environment variables if needed.

### 5. Create and Run Your First Python Program

1. Open VSCode and create a new file: hello.py
2. Add the following code

```sh
print("Hello, World!")
```

3. Save the file and run it in the terminal

```sh
python hello.py
```

4. If you see "Hello, World!" printed in the terminal, you've successfully set up your Python environment.

# Bonus Challenge

- Modify hello.py to ask for the user's name and greet them.
- Run the script and test different inputs.

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

# Hints

- Use python -m venv venv instead of just venv if you run into issues.
- Check VSCode’s Python interpreter (Ctrl + Shift + P → Select Interpreter).
- Use deactivate to exit the virtual environment when you're done.
