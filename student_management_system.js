// Student Management System

let students = [
    {
        id: 101,
        name: "Anoop",
        age: 22,
        course: "MCA",
        marks: [85, 78, 92, 88, 76]
    },
    {
        id: 102,
        name: "Rahul",
        age: 23,
        course: "MCA",
        marks: [72, 68, 81, 75, 70]
    },
    {
        id: 103,
        name: "Arjun",
        age: 21,
        course: "BCA",
        marks: [90, 94, 89, 92, 96]
    },
    {
        id: 104,
        name: "Meera",
        age: 22,
        course: "MCA",
        marks: [65, 72, 68, 74, 70]
    },
    {
        id: 105,
        name: "Neha",
        age: 21,
        course: "BCA",
        marks: [88, 91, 85, 87, 90]
    }
];

// Calculate total marks
function calculateTotal(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

// Calculate average
function calculateAverage(marks) {
    let total = calculateTotal(marks);
    return total / marks.length;
}

// Find grade
function calculateGrade(average) {

    if (average >= 90) {
        return "A+";
    }
    else if (average >= 80) {
        return "A";
    }
    else if (average >= 70) {
        return "B";
    }
    else if (average >= 60) {
        return "C";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

// Display student details
function displayStudent(student) {

    let total = calculateTotal(student.marks);
    let average = calculateAverage(student.marks);
    let grade = calculateGrade(average);

    console.log("--------------------------------");
    console.log("ID       :", student.id);
    console.log("Name     :", student.name);
    console.log("Age      :", student.age);
    console.log("Course   :", student.course);
    console.log("Marks    :", student.marks);
    console.log("Total    :", total);
    console.log("Average  :", average.toFixed(2));
    console.log("Grade    :", grade);
}

// Display all students
console.log("\n===== ALL STUDENTS =====");

for (let student of students) {
    displayStudent(student);
}


// Find the topper
function findTopper() {

    let topper = students[0];

    for (let student of students) {

        if (
            calculateAverage(student.marks) >
            calculateAverage(topper.marks)
        ) {
            topper = student;
        }
    }

    return topper;
}

let topper = findTopper();

console.log("\n===== TOPPER =====");
displayStudent(topper);


// Search student by ID
function searchStudent(id) {

    for (let student of students) {

        if (student.id === id) {
            return student;
        }
    }

    return null;
}

let searchId = 103;

console.log("\n===== SEARCH RESULT =====");

let result = searchStudent(searchId);

if (result !== null) {
    displayStudent(result);
}
else {
    console.log("Student not found");
}


// Students who scored above 80
console.log("\n===== STUDENTS WITH AVERAGE ABOVE 80 =====");

for (let student of students) {

    let average = calculateAverage(student.marks);

    if (average > 80) {
        console.log(student.name, "=>", average.toFixed(2));
    }
}


// Sort students according to average
let sortedStudents = [...students].sort(function (a, b) {

    return calculateAverage(b.marks) -
           calculateAverage(a.marks);

});

console.log("\n===== RANK LIST =====");

sortedStudents.forEach(function (student, index) {

    console.log(
        "Rank", index + 1,
        "-", student.name,
        "- Average:",
        calculateAverage(student.marks).toFixed(2)
    );

});


// Find students belonging to MCA
console.log("\n===== MCA STUDENTS =====");

let mcaStudents = students.filter(function (student) {

    return student.course === "MCA";

});

mcaStudents.forEach(function (student) {

    console.log(student.name);

});


// Calculate overall class average
let totalAverage = students.reduce(function (sum, student) {

    return sum + calculateAverage(student.marks);

}, 0);

let classAverage = totalAverage / students.length;

console.log("\n===== CLASS STATISTICS =====");
console.log("Class Average:", classAverage.toFixed(2));


// Add a new student
let newStudent = {
    id: 106,
    name: "Vishnu",
    age: 22,
    course: "MCA",
    marks: [79, 84, 76, 81, 87]
};

students.push(newStudent);

console.log("\nNew student added:", newStudent.name);


// Remove a student
let removeId = 104;

students = students.filter(function (student) {

    return student.id !== removeId;

});

console.log("Student with ID", removeId, "removed.");


// Final student count
console.log("\nTotal Students:", students.length);
