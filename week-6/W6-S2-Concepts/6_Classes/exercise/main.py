class Person:
    def __init__(self, name, age, height=0):
        self.name = name
        self.age = age
        self.height = 0

    def introduce(self):
        print(f"Name: {self.name}, Age: {self.age}")


class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def introduce(self):
        super().introduce()
        print(f"Student ID: {self.student_id}")


class Manager(Person):
    def __init__(self, name, age, department, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id
        self.department = department

    def introduce(self):
        super().introduce()
        print(f"Employee ID: {self.employee_id} working in {self.department}")

# Create a set of objects
if __name__ == "__main__":
    person1 = Person("Alice", 25)
    person1.introduce()

    student1 = Student("Bob", 30, "1234")
    student1.introduce()

    manager1 = Manager("Charlie", 35, "HR", "5678")
    manager1.introduce()

    person2 = Person("David", 40)
    person2.introduce()

staff = [person1, student1, manager1, person2]

x = map(lambda x: x.introduce(), staff) 

person3 = Person("Eve", 45)
staff.append(person3)


for person in staff:
    person.introduce()
