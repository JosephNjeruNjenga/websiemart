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
          li.innerHTML = `<div class="col"><div class="card h-100"><img src="${product.image}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${product.title}</h5><p class="card-text">${product.description}</p></div><div class="card-footer"><small class="text-muted">$${product.price}</small></div></div></div>`;
          div.appendChild(li);
        }
      });
    });
}
mensClothing.addEventListener("click", () => namee("men's clothing"));
womensClothing.addEventListener("click", () => namee("women's clothing"));
jewelery.addEventListener("click", () => namee("jewelery"));
electronics.addEventListener("click", () => namee("electronics"));
