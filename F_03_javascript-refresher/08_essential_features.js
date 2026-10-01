// Modern JavaScript, Fast

// 1. Using map() with hobbies
const hobbies = ["dancing", "singing", "reading"];

hobbies.map(hobby => console.log(hobby));

// 2. Destructuring an object
const student = {
    name: "Rancel",
    age: 20
};

const { name, age } = student;
console.log(name, age);

// 3. Using the spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);