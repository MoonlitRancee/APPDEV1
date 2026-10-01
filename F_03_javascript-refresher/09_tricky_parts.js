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

// this & Reference vs Copy

// 1. Regular function vs. arrow function and this
const obj = {
    name: "Rancel",

    regularMethod: function () {
        console.log("Regular method:", this.name);
    },

    arrowMethod: () => {
        console.log("Arrow method:", this.name);
    }
};

obj.regularMethod();
obj.arrowMethod();

// 2. Copying arrays by reference vs. spread
const original = [1, 2, 3];

// Copy by reference
const copyByReference = original;
copyByReference.push(4);

console.log("Original after reference copy:", original);

// Copy using spread
const copyBySpread = [...original];
copyBySpread.push(5);

console.log("Original after spread copy:", original);
console.log("Spread copy:", copyBySpread);