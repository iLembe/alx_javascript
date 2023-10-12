document.addEventListener("DOMContentLoaded", function () {
    createCart();
    displayCart();
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
    sessionStorage.setItem(item, true);
    displayCart();
}

function displayCart() {
    const cartSummary = document.querySelector("#cart-summary");
    const cartItems = Object.keys(sessionStorage);

    if (cartItems.length === 0) {
        cartSummary.textContent = "";
    } else {
        const itemCount = cartItems.length;
        cartSummary.textContent = `You previously had ${itemCount} item${itemCount > 1 ? "s" : ""} in your cart.`;
    }
}
