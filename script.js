// Sample Product List
const products = [
    { name: "Premium Milk Bottle", price: 4.50, image: "milk.jpg", description: "Fresh and premium quality milk in a bottle." },
    { name: "Paneer", price: 3.50, image: "paneer.jpg", description: "Fresh, soft, and healthy paneer." },
    { name: "Butter", price: 3.00, image: "butter.jpg", description: "Freshly churned butter." },
    { name: "Curd", price: 2.80, image: "curd.jpg", description: "Creamy, fresh, and healthy curd." },
    { name: "Monthly Subscription", price: 12.00, image: "subscription.png", description: "Get a monthly subscription for fresh products." }
];

let cart = [];

// Function to update the cart summary
function updateCartSummary() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price;
    });

    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

// Function to add product to cart
function addToCart(productIndex) {
    const product = products[productIndex];
    cart.push(product);
    alert(`${product.name} added to cart!`);
    updateCartSummary();
}

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
           <img src="${product.image}" alt="${product.name}">
           <div>
               <h4>${product.name}</h4>
               <p>$${product.price.toFixed(2)}</p>
           </div>
           <div class="controls">
               <input type="number" value="1" min="1" id="quantity-${index}">
               <button onclick="addToCart(${index})">Add to Cart</button>
           </div>
       `;
        productList.appendChild(productItem);
    });
}

// Function to apply a coupon code
function applyCoupon() {
    const couponCode = document.getElementById("coupon").value.trim().toLowerCase();

    if (couponCode === "discount10") {
        alert("Coupon applied! You get a 10% discount.");

        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price;
        });

        const discount = subtotal * 0.10;
        subtotal -= discount;

        const tax = subtotal * 0.18;
        const total = subtotal + tax;

        document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
        document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    } else {
        alert("Invalid coupon code.");
    }
}

// Handle checkout process
function proceedToCheckout() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    if (!name || !email || !address) {
        alert("Please fill in all fields of the contact form.");
    } else {
        alert("Checkout complete. Thank you for shopping with Pride of Cows!");
    }
}

// Call displayProducts function when the page loads
window.onload = displayProducts;
