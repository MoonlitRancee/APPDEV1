// Errors & Working with JSON

// try, catch & throw

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log("Division result:", divide(10, 0));
} catch (error) {
    console.log("Something went wrong:", error.message);
}


// JSON.stringify & JSON.parse

const user = {
    name: "Rancel",
    age: 20,
    course: "BS Information Systems",
    isStudent: true
};

// Convert the object into a JSON string
const jsonString = JSON.stringify(user);
console.log("JSON string:", jsonString);

// Convert the JSON string back into an object
const parsedUser = JSON.parse(jsonString);
console.log("User name:", parsedUser.name);
console.log("Data types:", typeof jsonString, typeof parsedUser);