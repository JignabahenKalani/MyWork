# Interacting with the File System in Python

## Challenge

Python is particularly useful for utility scripts that perform automated or complex operations. Many of these operations require interacting with the operating system's file system for reading, writing, and updating files, or even traversing folders.

In this challenge, you will write a simple script that **traverses the files within the `Documents` folder** and prints a list of the files found to a file called `results.txt`.

## Key Learnings

- How to **open and traverse a folder** in Python
- How to **append data** to a string variable while processing files
- How to **write output** to a file

## User Story

As a developer,  
I want to programmatically traverse a directory,  
So that I can list its contents and save the results to a file.

## Acceptance Criteria

- The script should **locate the `Documents` folder** on the user's system.
- It should **traverse all files** inside the `Documents` folder.
- The script should **record the filenames** in a string.
- The filenames should be **written to a file called `results.txt`**.
- If `results.txt` already exists, the script should **overwrite** it.

## Expected Output (Example in results.txt)

resume.pdf
project_notes.txt
budget.xlsx
family_photo.jpg

## Useful Online Resources

- [Python `os` Module Documentation](https://docs.python.org/3/library/os.html)
- [How to Recursively Traverse Files and Directories in Python](<https://medium.com/@sabahat-khan/how-to-recursively-traverse-files-and-directories-in-python-6020155713fa#:~:text=walk()%20%3A,of%20files%20that%20were%20traversed.>)
- [How to Traverse a Directory](https://dzone.com/articles/python-101-how-to-traverse-a-directory)
- [Writing to Files in Python](https://realpython.com/read-write-files-python/)

## Reference Example

You can also refer to **W6-S2-Concepts/4_Modules/exercise** for an example of reading and writing to a file.

---

This exercise will give you hands-on experience with **navigating the file system** and **writing file automation scripts** in Python. Happy coding! 🚀
