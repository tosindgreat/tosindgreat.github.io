// script.js

function addToCart(productId, price) {
    var quantity = document.getElementById('quantity' + productId).value;
    var summary = document.getElementById('summary' + productId);

    // Validate input
    if (quantity === "" || quantity <= 0 || isNaN(quantity)) {
        summary.textContent = "Please enter a valid quantity.";
        summary.style.color = "red";
        return;
    }

    var totalPrice = (quantity * price).toFixed(2);
    summary.textContent = `Great! Order of ${quantity} items is received, total price is $${totalPrice}.`;
    summary.style.color = "green";
}
