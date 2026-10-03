// Callbacks, Promises & Async/Await

// Callback Functions

function fetchUserMock(callback) {
    setTimeout(() => {
        callback({
            name: "Rancel",
            age: 20
        });
    }, 1000);
}

fetchUserMock((user) => {
    console.log("Callback - Got user:", user);
});


// Promises & async/await

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Rancel",
                age: 20
            });
        }, 1000);
    });
}

async function showUser() {
    try {
        const user = await fetchUser();
        console.log("Async/Await - Got user:", user);
    } catch (error) {
        console.log("Failed to load user:", error.message);
    }
}

showUser();


// Synchronous vs. Asynchronous

const name = "Rancel";
const age = 20;
const address = "Pampanga, Philippines";

setTimeout(() => {
    console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);
console.log("This message is printed immediately");