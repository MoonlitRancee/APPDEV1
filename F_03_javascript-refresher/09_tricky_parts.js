// JavaScript's Tricky Parts
// Equality & Emptiness

// 1. Comparing values using == and ===
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// 2. Undefined and null
let notDefined;
let empty = null;

console.log(notDefined); // undefined
console.log(empty);      // null