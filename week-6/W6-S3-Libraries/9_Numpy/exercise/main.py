import numpy as np

print("Welcome to NumPy Basics! Let's explore some common use cases.\n")

# 1. Creating an Array
print("Step 1: Creating an Array")
numbers = np.array([5, 10, 15, 20, 25])
print("Array:", numbers)

# TODO: Try changing the numbers in the array above and re-run the script!
numbers = np.array([1, 2, 3, 4, 20, 40, 3, 3 , 5])
print("Modified Array:", numbers)   
print("Shape of the array:", numbers.shape)  # Display the shape of the array
print("Data type of the array:", numbers.dtype)  # Display the data type of the array
print("\n")

# 2. Basic Math Operations
print("Step 2: Basic Math Operations")
print("Sum:", np.sum(numbers))
print("Mean (Average):", np.mean(numbers))
print("Maximum Value:", np.max(numbers))
print("Minimum Value:", np.min(numbers))

# TODO: Can you create another array and find its sum and mean?
additional_array = np.array([30, 35, 40])
print("Sum of additional array:", np.sum(additional_array))
print("Mean of additional array:", np.mean(additional_array))   

print("\n")

# 3. Generating Random Numbers
print("Step 3: Generating Random Numbers")
random_numbers = np.random.randint(1, 50, size=5)  # 5 random numbers between 1 and 50
print("Random Numbers:", random_numbers)

# TODO: Try changing the range (e.g., 1-100) and size (e.g., 10) of the random numbers.
random_numbers = np.random.randint(1, 100, size=10)
print("New Random Numbers:", random_numbers)
print("\n")

# 4. Working with 2D Arrays (Matrices)
print("Step 4: Working with 2D Arrays")
matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\n", matrix)
print("Transpose (Flip rows and columns):\n", matrix.T)

# Exercise: Create a 3x3 matrix and find its transpose!
matrix_3x3 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("3x3 Matrix:\n", matrix_3x3)
print("Transpose of 3x3 Matrix:\n", matrix_3x3.T)
print("\n")

# 5. Sorting an Array
print("Step 5: Sorting an Array")
unsorted_array = np.array([12, 5, 18, 7, 3])
print("Unsorted:", unsorted_array)
print("Sorted:", np.sort(unsorted_array))

# TODO: Change the numbers in `unsorted_array` and see how sorting works!
unsorted_array = np.array([20, 10, 30, 5, 15])
print("New Unsorted:", unsorted_array)
print("New Sorted:", np.sort(unsorted_array))
print("\n")

# 6. Challenge: Find Even Numbers in an Array
print("Step 6: Find Even Numbers in an Array")
arr = np.array([4, 9, 12, 15, 20, 25, 30])
even_numbers = arr[arr % 2 == 0]  # Filtering even numbers
print("Even Numbers:", even_numbers)

# TODO: Try adding more numbers and find the even ones!
arr = np.array([3, 6, 8, 11, 14, 17, 67, 22, 28, 31])
even_numbers = arr[arr % 2 == 0]
odd_numbers = arr[arr % 2 != 0]  # Filtering odd numbers
print("\n")
print("New Array:", arr)
print("Even Numbers:", even_numbers)
print("Odd Numbers:", odd_numbers)
print("\n")

print("Great job! Keep experimenting with NumPy!")
