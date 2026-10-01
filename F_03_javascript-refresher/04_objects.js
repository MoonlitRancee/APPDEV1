// Objects, Methods & this

const aboutMe = {
    name: "Rancel",
    age: 20,
    course: "BS Information Systems",

    introduce: function () {
        console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
    }
};

aboutMe.hobby = ["Dancing", "Singing", "Cooking"];


aboutMe.introduce();
console.log("Hobbies:", aboutMe.hobby);