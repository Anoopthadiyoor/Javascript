let students = [
    ["Anoop", 85, 78, 92],
    ["Rahul", 72, 88, 79],
    ["Arun", 90, 91, 85],
    ["Vishnu", 65, 74, 70],
    ["Akshay", 82, 69, 88]
];

console.log("STUDENT DETAILS");
console.log("----------------");

for (let i = 0; i < students.length; i++) {

    let name = students[i][0];
    let mark1 = students[i][1];
    let mark2 = students[i][2];
    let mark3 = students[i][3];

    let total = mark1 + mark2 + mark3;
    let average = total / 3;

    console.log("Name:", name);
    console.log("Mark 1:", mark1);
    console.log("Mark 2:", mark2);
    console.log("Mark 3:", mark3);
    console.log("Total:", total);
    console.log("Average:", average.toFixed(2));
    console.log("----------------");
}
