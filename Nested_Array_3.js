const employees = [
    [1001, "Neel", "Developer", "Kochi", 35000, 2],
    [1002, "Rahul", "Tester", "TVM", 28000, 3],
    [1003, "Anu", "Developer", "Kochi", 45000, 4],
    [1004, "Vishnu", "Designer", "Calicut", 32000, 2],
    [1005, "Meera", "Tester", "Kochi", 30000, 5],
    [1006, "Arjun", "Developer", "Bangalore", 55000, 6],
    [1007, "Diya", "Designer", "TVM", 40000, 3],
    [1008, "Akhil", "Developer", "Kochi", 60000, 7]
];

//1. Print all employee names
employees.forEach(emp => console.log(emp[1]));

//2. Print name and designation of every employee
employees.forEach(emp => {
    console.log(`${emp[1]}: ${emp[2]}`);
});

//3. Create an array containing only employee names
const names = employees.map(emp => emp[1]);

console.log(names);

//4. Find all developers
const developers = employees.filter(emp => emp[2] === "Developer");

console.log(developers);

//5. Find employees from Kochi
const kochiEmployees = employees.filter(emp => emp[3] === "Kochi");

console.log(kochiEmployees);
