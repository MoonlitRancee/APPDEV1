// Destructuring Objects, Arrays & Parameters

// 1. Destructuring an object
const person = {
    name: "Rancel",
    age: 20
};

const { name, age } = person;
console.log(name, age);

// 2. Destructuring an array
const hobbies = ["dancing", "singing", "reading"];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// 3. Destructuring directly in function parameters
function printName({ name }) {
    console.log(name);
}

printName(person);