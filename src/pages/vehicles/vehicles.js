document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("order");
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = document.getElementById("product").value;
    const quantity = document.getElementById("Quantity").value;

    window.alert(
      `Here is your order :  -> Product: ${product}, Quantity: ${quantity}`
    );
  });
});
