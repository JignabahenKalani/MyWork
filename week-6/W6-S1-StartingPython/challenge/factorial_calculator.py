# calculator = input("Enter a number to calculate its factorial: ")
# def factorial(n):
#     if n == 0:
#         return 1
#     else:
#         return n * factorial(n-1)
# print("Factorial:", factorial(int(calculator))) 

# for i in range(1, 11):
#     print(f"{i}! = {factorial(i)}")
# # This code calculates the factorial of a number entered by the user and prints the factorials of the numbers from 1 to 10.

# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     for i in range(2, n + 1):
#         result *= i
#         for j in range(1, i + 1):
#             print(f"Calculating {n} * {j}  = {result}")
#     return result

def factorial_breakdown(n):
    """Return the factorial value and the multiplication breakdown as a string."""
    if n == 0 or n == 1:
        return "1", 1  # 0! and 1! are both 1

    factors = [str(i) for i in range(n, 0, -1)]
    expression = " × ".join(factors)

    result = 1
    for i in range(n, 0, -1):
        result *= i

    return expression, result

def main():
    while True:
        user_input = input("\nEnter a number to calculate its factorial (or type 'quit' to exit): ")

        if user_input.lower() == "quit":
            print("Goodbye")
            break

        if not user_input.isdigit():
            print("Invalid input. Please enter a non-negative integer.")
            continue

        num = int(user_input)
        expression, result = factorial_breakdown(num)
        print(f"The factorial of {num} is {result}. Breakdown: {expression}")



if __name__ == "__main__":
    main()
