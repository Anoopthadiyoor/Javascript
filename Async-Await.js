// Create a web page that fetches post data from the JSONPlaceholder REST API using JavaScript's Fetch API and async/await. Display the fetched posts dynamically as responsive Bootstrap cards, showing the post ID, title, and body.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

</head>
<body>
    <div class="container">
        <h1 class="mt-5">Post details</h1>
        <div class="row" id="card-container">

        </div>
    </div>
</body>
<script>
    //fetchpost()
    async function fetchpost(){
        try{
        
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            // console.log(response)
            const data=response.json()
            // console.log(data)
            return data
        }
        catch(err){
            console.log(err)
            throw err
        }
    }
    fetchpost()

    //displaypost()
    async function displaypost(){
        const posts=await fetchpost()
        console.log(posts)
        const cardcontainer=document.getElementById('card-container')
        const cardshtml=posts.map(post=>`
            <div class="col -md-4 mb-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.id}</h5>
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>

                    </div>
                    </div>
                </div> `
        ).join('')
        cardcontainer.innerHTML=cardshtml
    }
displaypost()
</script>
</html>

