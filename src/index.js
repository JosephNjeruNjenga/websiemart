// CATEGORY SECTION
const div = document.getElementById("mother");
const mensClothing = document.getElementById("mens_clothing");
const womensClothing = document.getElementById("womens_clothing");
const jewelery = document.getElementById("jewelery");
const electronics = document.getElementById("electronics");

function deleteChild() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function namee(productCategory) {
  deleteChild();
  fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((products) => {
      products.forEach((product) => {
        if (product.category === productCategory) {
          const li = document.createElement("li");
          li.innerHTML = `<div class="col"><div class="card h-100"><img src="${product.image}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${product.title}</h5><p class="card-text">${product.description}</p></div><div class="card-footer"><small class="text-muted">$${product.price}</small><button id="buy_button">Buy</button></div></div></div>`;
          div.appendChild(li);
        }
      });
    });
}
mensClothing.addEventListener("click", () => namee("men's clothing"));
womensClothing.addEventListener("click", () => namee("women's clothing"));
jewelery.addEventListener("click", () => namee("jewelery"));
electronics.addEventListener("click", () => namee("electronics"));

// SEARCH BAR
function nameee(value) {
  deleteChild()
  const li = document.createElement("li");
  li.innerHTML = `<p>Sorry, we couldn't access our database for '<strong>${value}</strong>'. Kindly use the category section as we plan to add new features soon. Thank you.</p>`
  div.appendChild(li);
}
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameee(e.target.search_bar.value);
  form.reset()
});
