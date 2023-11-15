document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("order");
  fetch("./products-info.json")
    .then((res) => res.json())
    .then(info);

  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = document.getElementById("product").value;
    const quantity = document.getElementById("Quantity").value;

    window.alert(
      `Here is your order :\n -> Product: ${product}, Quantity: ${quantity}`
    );
  });
});

function info(data) {
  const productsContainer = document.getElementById("productsContainer");
  const productElements = data.map((productInfo) => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    const productImage = document.createElement("img");
    productImage.setAttribute("src", productInfo.src);
    productImage.setAttribute("alt", productInfo.name);
    productImage.setAttribute("width", "300px");
    // ovde ke si dodajs element za ime i price
    const productDescription = document.createElement("div");
    productDescription.innerHTML = `<p><b>${productInfo.name}</b></p><p>${productInfo.description}</p> <b><i>$${productInfo.price}</i></b> <br/>`;
    productContainer.appendChild(productImage);
    productContainer.appendChild(productDescription);
    return productContainer;
  });
  productElements.forEach((element) => productsContainer.appendChild(element));
  console.log("done");
}
