import numpy as np

print("Step 7: Advanced Matrix Operations")

# Creating a 3x3 matrix
matrix = np.array([[2, 3, 1], [4, 5, 6], [7, 8, 9]])

print("Matrix:\n", matrix)

# Finding the determinant
det = np.linalg.det(matrix)
print("Determinant of the matrix:", round(det, 2))

# Finding the inverse (only if the determinant is non-zero)
if det != 0:
    inverse_matrix = np.linalg.inv(matrix)
    print("Inverse of the matrix:\n", inverse_matrix)
else:
    print("Matrix is singular (no inverse exists).")

# Row-wise mean
row_mean = np.mean(matrix, axis=1)
print("Row-wise mean:", row_mean)

# Column-wise mean
col_mean = np.mean(matrix, axis=0)
print("Column-wise mean:", col_mean)

# Exercise: Try changing the values in the matrix and observe how the determinant and inverse change.
matrix = np.array([[2, 3, 1], [4, 5, 6], [7, 8, 9]])
print("Modified Matrix:\n", matrix)
det = np.linalg.det(matrix)
print("New Determinant of the matrix:", round(det, 2))
if det != 0:
	inverse_matrix = np.linalg.inv(matrix)
	print("New Inverse of the matrix:\n", inverse_matrix)	
else:
	print("Modified matrix is singular (no inverse exists).")

row_wise_mean = np.mean(matrix, axis=1)
print("New Row-wise mean:", row_wise_mean)
col_wise_mean = np.mean(matrix, axis=0)
print("New Column-wise mean:", col_wise_mean)	

"""
Modify the existing code to create a 3x3 matrix and perform the following operations:
	1.	Find the determinant of the matrix.
	2.	Find the inverse of the matrix (if it exists).
	3.	Find the row-wise and column-wise mean of the matrix.
    
Explanation
	•	Determinant helps in understanding whether a matrix is invertible.
	•	Inverse is useful in solving linear equations.
	•	Row-wise and column-wise mean are important for data analysis and normalization.

Challenge for Students
	•	Modify the code to generate a random 3x3 matrix instead of defining it manually.
	•	Try computing eigenvalues and eigenvectors using np.linalg.eig(matrix).
"""
