
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GitHub User Search</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet">

    <style>
        body {
            background-color: #f3f3f3;
        }

        .container {
            margin-top: 50px;
        }

        .search-box {
            max-width: 600px;
            margin: auto;
        }

        #users {
            margin-top: 30px;
        }

        .user-card {
            height: 100%;
        }

        .user-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }

        .error {
            color: red;
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>

<body>

    <div class="container">

        <h2 class="text-center mb-4">GitHub User Search</h2>

        <!-- Search box -->
        <div class="search-box">

            <div class="input-group">

                <input type="text"
                    id="username"
                    class="form-control"
                    placeholder="Enter GitHub username">

                <button class="btn btn-dark" onclick="searchUser()">
                    Search
                </button>

            </div>

            <p id="error" class="error"></p>

        </div>

        <!-- User cards will come here -->
        <div id="users" class="row g-4"></div>

    </div>


    <script>

        let allUsers = [];

        // Get all users when page loads
        function getUsers() {

            let xhr = new XMLHttpRequest();

            xhr.open("GET", "https://api.github.com/users", true);

            xhr.onload = function () {

                if (xhr.status == 200) {

                    allUsers = JSON.parse(xhr.responseText);

                    getUserDetails();

                } else {

                    document.getElementById("error").innerText =
                        "Unable to load users";
                }
            };

            xhr.onerror = function () {

                document.getElementById("error").innerText =
                    "Something went wrong";
            };

            xhr.send();
        }


        // Get details of every user
        function getUserDetails() {

            let completed = 0;

            allUsers.forEach(function (user, index) {

                let xhr = new XMLHttpRequest();

                xhr.open("GET", user.url, true);

                xhr.onload = function () {

                    if (xhr.status == 200) {

                        allUsers[index] = JSON.parse(xhr.responseText);

                    }

                    completed++;

                    // Display cards after all requests are completed
                    if (completed == allUsers.length) {
                        displayUsers(allUsers);
                    }
                };

                xhr.send();

            });

        }


        // Display users as cards
        function displayUsers(users) {

            let usersDiv = document.getElementById("users");

            usersDiv.innerHTML = "";

            users.forEach(function (user) {

                usersDiv.innerHTML += `

                    <div class="col-md-4">

                        <div class="card user-card p-3">

                            <div class="text-center">

                                <img src="${user.avatar_url}"
                                    alt="Profile picture">

                                <h4 class="mt-3">
                                    ${user.name || user.login}
                                </h4>

                                <p>
                                    ${user.bio || "No bio available"}
                                </p>

                            </div>

                            <hr>

                            <div class="row text-center">

                                <div class="col">

                                    <strong>
                                        ${user.followers}
                                    </strong>

                                    <p>Followers</p>

                                </div>

                                <div class="col">

                                    <strong>
                                        ${user.public_repos}
                                    </strong>

                                    <p>Repositories</p>

                                </div>

                            </div>

                        </div>

                    </div>

                `;
            });
        }


        // Search for a particular user
        function searchUser() {

            let username =
                document.getElementById("username").value.trim();

            let error =
                document.getElementById("error");

            if (username == "") {

                error.innerText = "Please enter a username";

                displayUsers(allUsers);

                return;
            }


            let foundUser = null;

            allUsers.forEach(function (user) {

                if (user.login.toLowerCase() == username.toLowerCase()) {

                    foundUser = user;
                }

            });


            if (foundUser != null) {

                error.innerText = "";

                // Display only the searched user
                displayUsers([foundUser]);

            } else {

                error.innerText = "User not found";

                document.getElementById("users").innerHTML = "";
            }
        }


        // Run when page loads
        getUsers();

    </script>

</body>

</html>
```
