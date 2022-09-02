function namee() {
  fetch("https://fakestoreapi.com/products/1")
    .then((resp) => resp.json())
    .then((product) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class="col"><div class="card h-100"><img src="${product.image}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${product.title}</h5><p class="card-text">${product.description}</p></div><div class="card-footer"><small class="text-muted">$${product.price}</small></div></div></div>`;
      const div = document.getElementById("mother");
      div.appendChild(li);
    });
}
const mensClothing = document.getElementById("mens_clothing");
mensClothing.addEventListener("click", () => {
  namee();
});
