// Classes & Inheritance

// 1. Create a Person class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

// 2. Create a Student class that inherits from Person
class Student extends Person {
  study() {
    console.log(this.name + " is studying BS Information Systems.");
  }
}

// 3. Create a Student object
const student = new Student("Rancel");

// 4. Call the methods
student.sayHello();
student.study();