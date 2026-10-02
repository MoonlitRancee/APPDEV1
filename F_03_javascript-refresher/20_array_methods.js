// Essential Array Methods

const students = [
    { name: "Isla", grade: 88 },
    { name: "Rancel", grade: 95 },
    { name: "Rege", grade: 42 }
];

// 1. filter() - Get students who passed
const passing = students.filter(s => s.grade >= 60);
console.log("Passing students:", passing.map(s => s.name));

// 2. find() - Find a student by name
const isla = students.find(s => s.name === "Isla");
console.log("Found student:", isla);

// 3. some() - Check if at least one student failed
console.log("Some students failed:", students.some(s => s.grade < 60));

// 4. every() - Check if all students passed
console.log("Every student passed:", students.every(s => s.grade >= 60));

// 5. sort() - Rank students by grade, highest first
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log("Ranked students:", ranked.map(s => s.name));