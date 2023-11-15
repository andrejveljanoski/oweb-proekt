document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("contact");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.alert("Thanks for contacting us!");
  });
});
