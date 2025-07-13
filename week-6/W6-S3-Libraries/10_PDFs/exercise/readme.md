# Working with PDF Files in Python

## Challenge

In this exercise, you are given a Python script that **reads and writes PDF files** using the `PyMuPDF` and `ReportLab` libraries. Your task is to **review and debug** the code to explore the capabilities of these libraries.

### Key aspects of the exercise:

- The script can **read and extract text** from a PDF file.
- The script can **generate a new PDF file** with text and simple formatting.
- Since **two libraries** are required (`pymupdf` and `reportlab`), a `requirements.txt` file is provided to manage dependencies.

Before running the script, you must:

1. **Create and activate a virtual environment**
2. **Install the required dependencies** using `requirements.txt`
3. **Run and debug the script**

## Key Learnings

- How to **work with PDF files** in Python (reading and writing).
- How to **create and manage virtual environments** in Python.
- How to **install multiple dependencies** using a `requirements.txt` file.

## User Story

As a developer,  
I want to read and generate PDF files programmatically,  
So that I can automate document processing tasks.

## Acceptance Criteria

- Create and activate a virtual environment (`venv`).
- Install dependencies using:

  ```bash
  pip install -r requirements.txt
  ```

  - Run the script and ensure:

  1. It correctly reads and extracts text from an existing PDF.
  2. It successfully generates a new PDF with formatted text.
  3. Debug any errors or missing implementations in the script.

## Example Usage

1. Setting Up the Environment

```bash
# Create a virtual environment
python -m venv myenv

# Activate the virtual environment
# Windows:
myenv\Scripts\activate

# macOS/Linux:
source myenv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## Useful Online Resources

- [PyMuPDF (fitz) Documentation](https://pymupdf.readthedocs.io/en/latest/)
- [ReportLab PDF Generation](https://www.reportlab.com/docs/reportlab-userguide.pdf)
- [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)

This exercise will help you gain hands-on experience with handling PDFs in Python, managing dependencies, and setting up virtual environments. Happy coding! 🚀
