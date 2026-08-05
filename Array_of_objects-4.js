const employees = [
  { id: 1, name: "Anoop", department: "IT", salary: 60000, age: 24 },
  { id: 2, name: "Rahul", department: "HR", salary: 45000, age: 28 },
  { id: 3, name: "Neha", department: "IT", salary: 75000, age: 26 },
  { id: 4, name: "Arun", department: "Finance", salary: 50000, age: 30 },
  { id: 5, name: "Anjali", department: "HR", salary: 65000, age: 25 },
  { id: 6, name: "Ajay", department: "IT", salary: 80000, age: 29 }
];
//dis[lay all employee name
employees.forEach(emp => console.log(emp.name));

//employees in It department
const result = employees.filter(emp => emp.department === "IT");
console.log(result);

//employee with highest salary
const highest = employees.reduce((a, b) =>
    a.salary > b.salary ? a : b);
console.log(highest);

//Total salary
const total = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log(total);
