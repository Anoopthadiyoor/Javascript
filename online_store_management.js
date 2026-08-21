// Online Store Management System

let products = [
    {
        id: 101,
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        stock: 8,
        rating: 4.5
    },
    {
        id: 102,
        name: "Headphones",
        category: "Electronics",
        price: 2500,
        stock: 15,
        rating: 4.2
    },
    {
        id: 103,
        name: "Keyboard",
        category: "Accessories",
        price: 1800,
        stock: 20,
        rating: 4.6
    },
    {
        id: 104,
        name: "Backpack",
        category: "Accessories",
        price: 2200,
        stock: 12,
        rating: 4.1
    },
    {
        id: 105,
        name: "Smart Watch",
        category: "Electronics",
        price: 7500,
        stock: 6,
        rating: 4.7
    }
];

let cart = [];


// Find product
function findProduct(productId) {

    return products.find(function(product) {
        return product.id === productId;
    });
}


// Add product to cart
function addToCart(productId, quantity) {

    let product = findProduct(productId);

    if (!product) {
        console.log("Product not found.");
        return;
    }

    if (quantity <= 0) {
        console.log("Invalid quantity.");
        return;
    }

    if (quantity > product.stock) {
        console.log(
            "Only",
            product.stock,
            product.name,
            "available."
        );
        return;
    }

    let existingProduct = cart.find(function(item) {
        return item.id === productId;
    });

    if (existingProduct) {

        if (
            existingProduct.quantity + quantity
            > product.stock
        ) {
            console.log("Not enough stock available.");
            return;
        }

        existingProduct.quantity += quantity;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    console.log(product.name, "added to cart.");
}


// Remove product from cart
function removeFromCart(productId) {

    let index = cart.findIndex(function(item) {
        return item.id === productId;
    });

    if (index === -1) {
        console.log("Product is not in cart.");
        return;
    }

    console.log(cart[index].name, "removed from cart.");

    cart.splice(index, 1);
}


// Calculate cart total
function calculateCartTotal() {

    return cart.reduce(function(total, item) {

        return total + item.price * item.quantity;

    }, 0);
}


// Apply discount
function applyDiscount(total) {

    if (total >= 50000) {
        return total * 0.85;
    }

    if (total >= 25000) {
        return total * 0.90;
    }

    if (total >= 10000) {
        return total * 0.95;
    }

    return total;
}


// Display cart
function displayCart() {

    console.log("\n========== CART ==========");

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    cart.forEach(function(item) {

        let itemTotal =
            item.price * item.quantity;

        console.log(
            item.name,
            "| Quantity:",
            item.quantity,
            "| Total:",
            itemTotal
        );
    });

    let total = calculateCartTotal();
    let finalPrice = applyDiscount(total);

    console.log("--------------------------");
    console.log("Original Total:", total);
    console.log("Final Total:", finalPrice);
}


// Search products
function searchProducts(keyword) {

    let results = products.filter(function(product) {

        return product.name
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\n===== SEARCH RESULTS =====");

    if (results.length === 0) {
        console.log("No products found.");
        return;
    }

    results.forEach(function(product) {

        console.log(
            product.name,
            "- ₹" + product.price
        );
    });
}


// Products by category
function getProductsByCategory(category) {

    let results = products.filter(function(product) {

        return product.category.toLowerCase()
            === category.toLowerCase();

    });

    console.log(
        "\n===== " + category.toUpperCase() + " ====="
    );

    results.forEach(function(product) {

        console.log(
            product.name,
            "- ₹" + product.price
        );
    });
}


// Find highest-rated product
function getBestProduct() {

    return products.reduce(function(best, product) {

        return product.rating > best.rating
            ? product
            : best;

    });
}


// Find cheapest product
function getCheapestProduct() {

    return products.reduce(function(cheapest, product) {

        return product.price < cheapest.price
            ? product
            : cheapest;

    });
}


// Display low-stock products
function lowStockProducts() {

    console.log("\n===== LOW STOCK =====");

    let lowStock = products.filter(function(product) {

        return product.stock < 10;

    });

    lowStock.forEach(function(product) {

        console.log(
            product.name,
            "- Only",
            product.stock,
            "left"
        );

    });
}


// Purchase cart
function purchase() {

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    for (let item of cart) {

        let product = findProduct(item.id);

        product.stock -= item.quantity;
    }

    let total = calculateCartTotal();
    let finalPrice = applyDiscount(total);

    console.log("\n===== PURCHASE SUCCESSFUL =====");

    console.log("Original Amount:", total);
    console.log("Amount to Pay:", finalPrice);
    console.log(
        "You Saved:",
        total - finalPrice
    );

    cart = [];
}


// -----------------------------
// TESTING THE SYSTEM
// -----------------------------

console.log("===== ONLINE STORE =====");


// Add products

addToCart(101, 1);

addToCart(102, 2);

addToCart(103, 2);

addToCart(105, 1);


// Display cart

displayCart();


// Search

searchProducts("lap");

searchProducts("head");


// Category

getProductsByCategory("Electronics");

getProductsByCategory("Accessories");


// Best product

let best = getBestProduct();

console.log(
    "\nBest Rated Product:",
    best.name,
    "- Rating:",
    best.rating
);


// Cheapest product

let cheapest = getCheapestProduct();

console.log(
    "Cheapest Product:",
    cheapest.name,
    "- Price: ₹" + cheapest.price
);


// Low stock

lowStockProducts();


// Purchase

purchase();


// Show updated stock

console.log("\n===== UPDATED STOCK =====");

products.forEach(function(product) {

    console.log(
        product.name,
        "- Stock:",
        product.stock
    );

});
