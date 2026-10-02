// Converting to Arrow Functions

// 1. Greet function with one parameter and implicit return
const greet = name => "Hello, " + name;

// 2. Square function with one parameter and implicit return
const square = n => n * n;

// 3. SayHi function with no parameters
const sayHi = () => {
    console.log("Hi, Rancel!");
};

console.log(greet("Rancel"));
console.log("Square:", square(5));
sayHi();