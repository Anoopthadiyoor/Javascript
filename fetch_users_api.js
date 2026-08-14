async function fetchUsers() {
    try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const data = await response.json();

        console.log("User Details:");

        data.users.forEach((user) => {
            console.log(`Name: ${user.firstName} ${user.lastName}`);
            console.log(`Age: ${user.age}`);
            console.log(`Email: ${user.email}`);
            console.log(`Phone: ${user.phone}`);
            console.log(`Country: ${user.address.country}`);
            console.log("-------------------------");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchUsers();
