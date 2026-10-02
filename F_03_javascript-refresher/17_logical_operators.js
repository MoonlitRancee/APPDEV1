// Logical Operators & Truthy/Falsy
// Truthy & Falsy Values

const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((val) => {
    if (val) {
        console.log(val, "-> truthy");
    } else {
        console.log(val, "-> falsy");
    }
});