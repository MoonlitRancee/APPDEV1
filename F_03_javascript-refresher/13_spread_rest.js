// Spread & Rest Operators

// 1. Spread operator with arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log("Original numbers:", numbers);
console.log("New numbers:", newNumbers);


// 2. Spread operator with objects
const user = {
  name: "Rancel",
  age: 20
};

const newUser = {
  ...user,
  course: "BS Information Systems"
};

console.log("Original user:", user);
console.log("New user:", newUser);


// 3. Rest operator with function parameters
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}

console.log("Sum:", sum(1, 2, 3, 4));