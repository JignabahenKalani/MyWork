def greet():
    print("Hello everyone")

def add_numbers(a, b):
    return a + b    

greet()
result = add_numbers(10, 10)
print("Sum:", result)   

def sum_list(numbers, count= 1):
    if not all(isinstance(num, (int, float)) for num in numbers):
        return "Error: List must contain only numbers"
    return sum(numbers)

print(sum_list([1, 2, 3, 4]))  # Should return 10
print(sum_list([1, "two", 3]))  # Should return an error message