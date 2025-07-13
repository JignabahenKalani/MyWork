class Person:
    def __init__(self, name, age, height=0):
        self.name = name
        self.age = age
        self.height = 0

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")


# Example Usage
if __name__ == "__main__":
    # Create a person object
    person1 = Person("Alice", 25)

    person1.age = 26
    person1.name = "Alice Smith"

    # Display the person's details
    person1.display()


    person2 = Person("Bob", 30)
    person2.name = "Bob Smith"
    person2.display()

    