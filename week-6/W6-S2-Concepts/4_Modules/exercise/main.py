import math_utils
import file_utils
import string_utils

if __name__ == "__main__":
    # Math operations
    a = int(input("Enter first number for addition: "))
    b = int(input("Enter second number for addition: "))
    print("Addition:", math_utils.add(a, b))

    a = int(input("Enter first number for subtraction: "))
    b = int(input("Enter second number for subtraction: "))
    print("Subtraction:", math_utils.subtract(a, b))

    # String operations
    print("Uppercase:", string_utils.uppercase("hello"))
    print("Lowercase:", string_utils.lowercase("WORLD"))

    # File operations
    file_utils.write_file("sample.txt", "Hello, world!")
    print("File content:", file_utils.read_file("sample.txt"))
