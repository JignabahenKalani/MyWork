import numpy as np

# 1. Creating and Manipulating Arrays
print("=== Creating Arrays ===")
arr = np.array([10, 20, 30, 40, 50])
print("Array:", arr)
print("Doubled Values:", arr * 2)  # Multiply all elements by 2
print("\n")

# 2. Basic Math Operations
print("=== Basic Math Operations ===")
print("Sum of elements:", np.sum(arr))
print("Mean (Average):", np.mean(arr))
print("Maximum Value:", np.max(arr))
print("Minimum Value:", np.min(arr))
print("\n")

# 3. Working with a 2D Matrix
print("=== 2D Array (Matrix) ===")
matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\n", matrix)
print("Transpose:\n", matrix.T)  # Swap rows and columns
print("\n")

# 4. Generating Random Numbers
print("=== Random Numbers ===")
random_numbers = np.random.randint(1, 100, size=5)  # 5 random numbers between 1 and 100
print("Random Numbers:", random_numbers)
print("\n")

# 5. Sorting an Array
print("=== Sorting Data ===")
unsorted = np.array([15, 3, 8, 22, 1])
print("Unsorted Array:", unsorted)
print("Sorted Array:", np.sort(unsorted))
