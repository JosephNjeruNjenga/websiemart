const div = document.getElementById("mother");
const mensClothing = document.getElementById("mens_clothing");
const womensClothing = document.getElementById("womens_clothing");
const jewelery = document.getElementById("jewelery");
const electronics = document.getElementById("electronics");
const cartButton = document.getElementById("cart_button");

function deleteChild() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

// CATEGORY SECTION
function categoryDisplay(productCategory) {
  deleteChild();
  fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((products) => {
      products.forEach((product) => {
        if (product.category === productCategory) {
          const li = document.createElement("li");
          li.id = `card_${product.id}`;
          li.innerHTML = `<div class="col"><div class="card h-100"><img src="${product.image}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${product.title}</h5><p class="card-text">${product.description}</p></div><div class="card-footer"><small class="text-muted">$${product.price}</small><button class="buy_button" id="btn_${product.id}">Buy</button></div></div></div>`;
          div.appendChild(li);
        }
      });
    });
}
mensClothing.addEventListener("click", () => categoryDisplay("men's clothing"));
womensClothing.addEventListener("click", () => categoryDisplay("women's clothing"));
jewelery.addEventListener("click", () => categoryDisplay("jewelery"));
electronics.addEventListener("click", () => categoryDisplay("electronics"));

// SEARCH BAR
function searchDisplay(value) {
  deleteChild();
  const li = document.createElement("li");
  li.innerHTML = `<p>Sorry, we couldn't access our database for '<strong>${value}</strong>'. Kindly use the category section as we plan to add new features soon. Thank you.</p>`;
  div.appendChild(li);
}
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchDisplay(e.target.search_bar.value);
  form.reset();
});

// CART BUTTON
function cartDisplay() {
  deleteChild()
  const li = document.createElement("li");
  li.innerHTML = `<p>Sorry, we couldn't access our database for products saved in cart. Kindly use the category section as we plan to add new features soon. Thank you.</p>`;
  div.appendChild(li);
}
cartButton.addEventListener("click", cartDisplay);
