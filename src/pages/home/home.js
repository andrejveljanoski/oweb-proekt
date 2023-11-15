window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault();
    window.alert("Successfully logged in!");
    window.location.href = "../insta/insta.html";
  });
});
