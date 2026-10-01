// Functions, Three Ways

// 1. Function declaration
function greet(name) {
    return "Hello, " + name + "! Welcome to JavaScript.";
}

// 2. Arrow function
const square = (num) => {
    return num * num;
};

// 3. Function returning an object
function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}


console.log(greet("Rancel"));
console.log("Square:", square(6));
console.log("Calculator:", calculator(10, 5));