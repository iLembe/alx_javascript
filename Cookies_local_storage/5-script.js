document.addEventListener("DOMContentLoaded", function () {
    if (typeof (Storage) === "undefined") {
        alert("Sorry, your browser does not support Web storage. Try again with a better one.");
    } else {
        createCart();
        displayCart();
    }
});

function createCart() {
    const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

    const ul = document.querySelector("#available-items ul");

    availableItems.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", function () {
            addItemToCart(item);
        });
        ul.appendChild(li);
    });
}

function addItemToCart(item) {
    localStorage.setItem(item, true);
    displayCart();
}

function displayCart() {
    const cartSummary = document.querySelector("#cart-summary");
    const cartItems = Object.keys(localStorage);

    if (cartItems.length === 0) {
        cartSummary.textContent = "";
    } else {
        const itemCount = cartItems.length;
        cartSummary.textContent = `You previously had ${itemCount} item${itemCount > 1 ? "s" : ""} in your cart.`;
    }
}
