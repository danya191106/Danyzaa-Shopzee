const cartCount =
document.querySelector(".shop-tools button span");


let cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];


cartCount.textContent = cartItems.length;


const addButtons =
document.querySelectorAll(".product button");


/* Add to Cart */

addButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.stopPropagation();


        const product =
        button.closest(".product");


        const productName =
        product.querySelector("h2").textContent;


        const productPrice =
        product.querySelector("p").textContent;


        const productImage =
        product.querySelector("img").src;


        const existingProduct =
        cartItems.find(function(item) {
            return item.name === productName;
        });


        if (existingProduct) {

            window.location.href = "cart.html";

            return;
        }


        cartItems.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });


        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );


        cartCount.textContent =
        cartItems.length;


        button.textContent =
        "Go to Cart";

    });

});


/* Restore button state after refresh */

cartItems.forEach(function(item) {

    addButtons.forEach(function(button) {

        const product =
        button.closest(".product");


        const productName =
        product.querySelector("h2").textContent;


        if (productName === item.name) {

            button.textContent =
            "Go to Cart";

        }

    });

});


/* Product Details Page */

const products =
document.querySelectorAll(".product");


products.forEach(function(product) {

    product.addEventListener("click", function() {

        const productName =
        product.querySelector("h2").textContent;


        localStorage.setItem(
            "selectedProduct",
            productName
        );


        window.location.href =
        "product.html";

    });

});


/* Search */

const searchInput =
document.querySelector(".shop-tools input");


searchInput.addEventListener("input", function() {

    const searchText =
    searchInput.value.toLowerCase();


    products.forEach(function(product) {

        const productName =
        product.querySelector("h2")
        .textContent
        .toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});