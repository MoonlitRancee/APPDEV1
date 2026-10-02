// ES Modules

const userInfo = {
    name: "Rancel",
    course: "BS Information Systems",
    year: 3
};

function greet() {
    return "Hello from module!";
}

export default greet;
export { userInfo };