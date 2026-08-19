async function getUser() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>City: ${data.address.city}</p>
        `;

    } catch (error) {

        document.getElementById("result").innerHTML =
            "Error fetching data";

        console.log(error);
    }
}
