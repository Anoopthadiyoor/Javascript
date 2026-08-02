const greetUser = (role) => (name) => {
    console.log(`Welcome ${role}, ${name}!`);
};

// First call sets the role
const greetAdmin = greetUser("Admin");
const greetStudent = greetUser("Student");

// Second call takes the name
greetAdmin("Alice");   // Output: Welcome Admin, Alice!
greetStudent("Bob");   // Output: Welcome Student, Bob!
