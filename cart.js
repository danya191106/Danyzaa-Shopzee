const cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const totalPrice = 
document.querySelector("#totalPrice");

function updateTotal(){
    let total = 0;

    cartItems.forEach(function(item)
{
    const price = 
    Number(item.price.replace("₹", ""));
    total += price * item.quantity;
});
totalPrice.textContent = total;
}

function checkEmptyCart() {
    if (cartItems.length === 0) {
        cartContainer.innerHTML =
        "<h2>Your cart is empty 🛒</h2>";
    }
}

const cartContainer =
document.querySelector(".cart-items");

cartItems.forEach(function(item) {

    const cartItem =
    document.createElement("div");

    cartItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.price}</p>

        <div class="quantity">
        <button class="minus">-</button>
        <span>${item.quantity}</span>
        <button class="plus">+</button>
        </div>

        <button class="remove">Remove</button>
        `;

        cartContainer.append(cartItem);

        cartItem.addEventListener("click", function() {
            localStorage.setItem("selectedProduct", item.name);
            window.location.href = "product.html";
        });

        const minusButton = cartItem.querySelector(".minus");
const plusButton = cartItem.querySelector(".plus");
const quantityDisplay = cartItem.querySelector(".quantity span");

plusButton.addEventListener("click", function(event) {
    event.stopPropagation();
    item.quantity++;
    quantityDisplay.textContent = item.quantity;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    updateTotal();
});

minusButton.addEventListener("click", function(event) {
    event.stopPropagation();
    if (item.quantity > 1) {
        item.quantity--;
        quantityDisplay.textContent = item.quantity;

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateTotal();
    }
});
const removeButton =
cartItem.querySelector(".remove");

removeButton.addEventListener("click", function(event){
    event.stopPropagation();
    const index =
    cartItems.indexOf(item);

    cartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    cartItem.remove();
updateTotal();
checkEmptyCart();
});
});
updateTotal();
checkEmptyCart();