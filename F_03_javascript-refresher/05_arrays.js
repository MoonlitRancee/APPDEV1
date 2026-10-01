// Arrays - push, shift & for...of

let favoriteFoods = ["Chicken Adobo", "Sinigang", "Pizza"];

// Add one food to the end
favoriteFoods.push("Ice Cream");

// Remove the first food
favoriteFoods.shift();

for (const food of favoriteFoods) {
    console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);

console.log(liked);