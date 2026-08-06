// id, name, department, salary, age, city

let employees = [
    [101, "Arun", "IT", 50000, 25, "Kochi"],
    [102, "Neha", "HR", 45000, 28, "Delhi"],
    [103, "Rahul", "IT", 70000, 30, "Bangalore"],
    [104, "Anu", "Finance", 65000, 35, "Kochi"],
    [105, "Vivek", "HR", 40000, 24, "Mumbai"],
    [106, "Asha", "IT", 80000, 32, "Chennai"],
    [107, "John", "Finance", 55000, 29, "Delhi"],
    [108, "Meera", "IT", 90000, 27, "Kochi"]
];

//Display all employee names.
employees.forEach(emp => console.log(emp[1]));

//Find employees in the IT department.
let result = employees.filter(emp => emp[2] === "IT");
console.log(result);

//Find employee with the highest salary.
let highest = employees.reduce((a, b) => a[3] > b[3] ? a : b);
console.log(highest);

//Find employee with the lowest salary
let lowest = employees.reduce((a, b) => a[3] < b[3] ? a : b);
console.log(lowest);

//Find employees whose name starts with "A".
let result = employees.filter(emp => emp[1].startsWith("A"));
console.log(result);

//Find employees whose name ends with "a".
let result = employees.filter(emp => emp[1].endsWith("a"));
console.log(result);

//Find the youngest employee.
let youngest = employees.reduce((a, b) => a[4] < b[4] ? a : b);
console.log(youngest);

//Find the oldest employee.
let oldest = employees.reduce((a, b) => a[4] > b[4] ? a : b);
console.log(oldest);
