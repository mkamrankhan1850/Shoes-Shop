
const products = [
  {
    id: 1,
    name: "Air Runner",
    category: "Running Shoes",
    price: 4500,
    badge: "BEST SELLER",
    image: "photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    name: "Urban Sneakers",
    category: "Casual Shoes",
    price: 3800,
    badge: "POPULAR",
    image: "photo-1549298916-b41d501d3772"
  },
  {
    id: 3,
    name: "Street Classic",
    category: "Lifestyle Shoes",
    price: 3200,
    badge: "NEW",
    image: "photo-1460353581641-37baddaab5fa"
  },
  {
    id: 4,
    name: "Sport Flex",
    category: "Sports Shoes",
    price: 5000,
    badge: "TRENDING",
    image: "photo-1600185365483-26d7a4cc7519"
  }
];

const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

let cart = [];

// Display product cards using map()
productsGrid.innerHTML = products.map((product) => {
  return `
    <article class="product-card">
      <div class="product-image">
        <img
          src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=80"
          alt="${product.name}"
          loading="lazy"
        />
        <span class="product-badge">${product.badge}</span>
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-category">${product.category}</p>

        <div class="product-bottom">
          <span class="product-price">
            Rs. ${product.price.toLocaleString("en-PK")}
          </span>

          <button
            class="add-btn"
            data-id="${product.id}"
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  `;
}).join("");

// Add products to cart
productsGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-btn");

  if (!button) return;

  const productId = Number(button.dataset.id);
  const selectedProduct = products.find(
    (product) => product.id === productId
  );

  if (selectedProduct) {
    cart.push(selectedProduct);
    cartCount.textContent = cart.length;

    button.textContent = "Added ✓";

    setTimeout(() => {
      button.textContent = "+ Add";
    }, 1000);
  }
});

// Show cart details
cartBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const items = cart
    .map((product) => `${product.name} - Rs. ${product.price}`)
    .join("\n");

  alert(
    `Your Shopping Cart:\n\n${items}\n\n` +
    `Total Items: ${cart.length}\n` +
    `Total Price: Rs. ${total.toLocaleString("en-PK")}`
  );
});

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close menu after clicking a navigation link
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
