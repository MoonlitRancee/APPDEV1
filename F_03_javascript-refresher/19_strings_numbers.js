// Strings & Numbers in Depth

// String Methods

const raw = "  Rancel Cuervo  ";
const clean = raw.trim();

const [first, last] = clean.split(" ");

console.log("First name:", first.toUpperCase());
console.log("Includes Cuervo:", clean.includes("Cuervo"));
console.log("First five characters:", clean.slice(0, 5));
console.log(`Full name: ${first} ${last}`);


// Number Methods

console.log("Parsed number:", parseInt("42px"));
console.log("Rounded number:", (19.9999).toFixed(2));

const result = "abc" / 2;

console.log("Invalid calculation:", result);
console.log("Is NaN:", Number.isNaN(result));