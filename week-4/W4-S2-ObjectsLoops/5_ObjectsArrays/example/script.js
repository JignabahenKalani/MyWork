var student = {
  name: "John",
  age: 25,
  isGraduated: false,
};

console.log(student.name + " is " + student.age + " years old.");

var students = [
  {
    name: "John",
    age: 25,
    isGraduated: false,
  },
  {
    name: "Jane",
    age: 22,
    isGraduated: true,
  },
  {
    name: "Jack",
    age: 30,
    isGraduated: true,
  },
];

var student1 = students[0];
console.log(student1.name + " is the first student in the array.");

var student2 = students[1];
console.log(student2.name + " is the second student in the array.");

var student3 = students[2];
console.log(student3.name + " is the first student in the array.");

for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + " is " + students[i].age + " years old.");
}
