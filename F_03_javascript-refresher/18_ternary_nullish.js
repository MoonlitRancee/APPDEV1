// Ternary, Optional Chaining & Nullish Coalescing

// The Ternary Operator

// Pass or fail checker
const score = 85;
const result = score >= 70 ? "Pass" : "Fail";
console.log("Grade result:", result);

// Check if a number is even or odd
const num = 7;
console.log("Number is:", num % 2 === 0 ? "even" : "odd");


// Optional Chaining & Nullish Coalescing

// Optional chaining
const user = {
    name: "Rancel"
};

console.log("City:", user.address?.city);

// Nullish coalescing
const age = 0;

console.log("Age using ||:", age || 18);
console.log("Age using ??:", age ?? 18);