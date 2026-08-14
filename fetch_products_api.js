async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        const data = await response.json();

        console.log("Product List:");

        data.products.forEach((product) => {
            console.log(`ID: ${product.id}`);
            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("-------------------------");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchProducts();
