document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const messageDiv = document.getElementById("message");
    const cartItemsList = document.getElementById("cart-items");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const carName = this.parentElement.querySelector("h3").textContent;
            const listItem = document.createElement("li");
            listItem.textContent = carName;
            cartItemsList.appendChild(listItem);
            messageDiv.textContent = "Added successfully";
            messageDiv.style.display = "block";
            setTimeout(function() {
                messageDiv.textContent = "";
                messageDiv.style.display = "none";
            }, 2000);
        });
    });
});