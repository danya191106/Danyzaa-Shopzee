const products = [
    {
        name: "Polo T-shirt & Wide-Leg Trouser",
        price: "₹999",
        image: "images/dress1.jpg",
        rating: "4.3⭐",
        description: "A stylish polo T-shirt and wide-leg trouser combination for a comfortable and modern look."
    },
    {
        name: "Striped Half-Zip Pullover Sweater",
        price: "₹2099",
        image: "images/dress2.jpg",
        rating: "4.1⭐",
        description: "A comfortable striped half-zip pullover sweater with a casual and stylish design."
    },
    {
        name: "Floral A-line Kurta with Palazzo Set",
        price: "₹699",
        image: "images/dress3.jpg",
        rating: "4.7⭐",
        description: "A beautiful floral A-line kurta with palazzo set, perfect for a stylish ethnic look."
    },
    {
        name: "Ethnic Print Short Kurti",
        price: "₹400",
        image: "images/dress4.jpg",
        rating: "4.5⭐",
        description: "A comfortable ethnic print short kurti suitable for casual and everyday wear."
    },
    {
        name: "Ethnic Co-ord Kurta Set",
        price: "₹599",
        image: "images/dress5.jpg",
        rating: "3.5⭐",
        description: "A stylish ethnic co-ord kurta set designed for a simple and elegant look."
    },
    {
        name: "Liquid Lipstick",
        price: "₹499",
        image: "images/lipstick1.png",
        rating: "4⭐",
        description: "A smooth liquid lipstick that gives a beautiful finish and stylish look."
    },
    {
        name: "SUGAR Cosmetics Matte As Hell",
        price: "₹550",
        image: "images/lipstick2.jpg",
        rating: "4.2⭐",
        description: "A matte lipstick designed to give a bold and stylish finish."
    },
    {
        name: "SWISS Beauty Bold Matte Lipliner (SB-1203)",
        price: "₹70",
        image: "images/lipstick3.jpg",
        rating: "4.5⭐",
        description: "A bold matte lipliner that helps define the lips with a smooth finish."
    },
    {
        name: "Maybelline New York Lipliner Pencil",
        price: "₹450",
        image: "images/lipstick4.jpg",
        rating: "4.8⭐",
        description: "A lipliner pencil designed to define and shape the lips beautifully."
    },
    {
        name: "Lakme 9to5 Hya Beach Lipstick + Liner Duo",
        price: "₹764",
        image: "images/lipstick5.jpg",
        rating: "4.4⭐",
        description: "A convenient lipstick and liner duo for a stylish everyday lip look."
    },
    {
        name: "Minimalist white casual sneakers",
        price: "₹799",
        image: "images/sandals1.jpg",
        rating: "5.0⭐",
        description: "Minimalist white casual sneakers with a simple and versatile design."
    },
    {
        name: "Women's Strappy Slide Sandals",
        price: "₹300",
        image: "images/sandals2.jpg",
        rating: "4.1⭐",
        description: "Comfortable strappy slide sandals designed for casual everyday wear."
    },
    {
        name: "DressBerry Women Open Toe Platform Heel Sandals",
        price: "₹680",
        image: "images/sandals3.jpg",
        rating: "4.4⭐",
        description: "Stylish open-toe platform heel sandals with an elegant design."
    },
    {
        name: "Women's Wedge Platform Cross-Strap Sandals",
        price: "₹530",
        image: "images/sandals4.jpg",
        rating: "4.6⭐",
        description: "Elegant wedge platform sandals featuring a comfortable cross-strap design."
    },
    {
        name: "Korean-style chunky platform sneakers",
        price: "₹699",
        image: "images/sandals5.jpg",
        rating: "3.8⭐",
        description: "Trendy Korean-style chunky platform sneakers with a fashionable design."
    }
];


const productDetails =
document.querySelector(".product-details");

const selectedProduct =
localStorage.getItem("selectedProduct");

const product =
products.find(function(item) {
    return item.name === selectedProduct;
});


if (product) {

    const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyInCart =
    cartItems.some(function(item) {
        return item.name === product.name;
    });


    productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

            <h2>${product.name}</h2>

            <p class="product-price">${product.price}</p>

            <div class="rating">
                ${product.rating}
            </div>

            <p class="product-description">
                ${product.description}
            </p>

            <button class="add-product">
                ${alreadyInCart ? "Go to Cart" : "Add to Cart"}
            </button>

        </div>
    `;


    const addButton =
    document.querySelector(".add-product");


    addButton.addEventListener("click", function() {

        if (addButton.textContent.trim() === "Go to Cart") {

            window.location.href = "cart.html";

            return;
        }


        const currentCart =
        JSON.parse(localStorage.getItem("cartItems")) || [];


        const existingProduct =
        currentCart.find(function(item) {
            return item.name === product.name;
        });


        if (existingProduct) {

            addButton.textContent = "Go to Cart";

            return;
        }


        currentCart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });


        localStorage.setItem(
            "cartItems",
            JSON.stringify(currentCart)
        );


        addButton.textContent = "Go to Cart";

    });


} else {

    productDetails.innerHTML =
    "<h2>Product not found.</h2>";

}