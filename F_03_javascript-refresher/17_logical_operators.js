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

// &&, || and !

const username = "Isla";
const password = "secret123";

// AND (&&): Both username and password are required
const canLogIn = username !== "" && password !== "";
console.log("Can log in:", canLogIn);

// OR (||): User must be an admin or subscriber
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log("Can watch:", canWatch);


console.log("Default:", "" || "default");
console.log("Welcome:", username && "Welcome!");

// NOT (!): Reverses the boolean value
console.log("Cannot log in:", !canLogIn);