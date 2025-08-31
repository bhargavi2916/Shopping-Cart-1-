const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image:
      "https://plus.unsplash.com/premium_photo-1679913796054-fc4e44f35b40?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59.99,
  },
  {
    id: 2,
    name: "Smartphone",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 699.99,
  },
  {
    id: 3,
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1099.99,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29.99,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    image:
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89.99,
  },
  {
    id: 6,
    name: "Smartwatch",
    image:
      "https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199.99,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 49.99,
  },
];

let cart = [];

const productLists = document.getElementById("product-list");

const cartCount = document.getElementById("cart-count");

const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");

const cartPanel = document.getElementById("cart-panel");

function renderProducts() {
  products.forEach((product) => {
    // creating div in js
    const div = document.createElement("div");
    div.classList = "product";

    div.innerHTML = `
     <img src="${product.image}" alt="${product.name}"/>
     <h4>${product.name}</h4>
     <p>${product.price}</p>
     <button class="btn btn-primary" onclick ="addToCart(${product.id})">Add To Cart</button>
     `;

    productLists.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((pro) => pro.id === id);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const div = document.createElement("div");

    div.classList = "cart-item";
    div.innerHTML = `
    <img src ="${item.image}" alt="${item.name}">
    <div class="cart-item-info">
          <h5>${item.name}</h5>
          <p>$${item.price}</p>
          <button class="btn btn-danger" onclick="removeOnItem(${item.id})">remove</button>
        </div>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = `Total: $${total}`;
}

function toggleCart() {
  cartPanel.classList.toggle("show");
}

function removeOnItem(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
  updateCartUI();
}

renderProducts();
