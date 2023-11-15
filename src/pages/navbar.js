window.addEventListener("DOMContentLoaded", () => {
  const dropdownContent = `<li>
  <a href="../vehicles/vehicles.html"
    ><button>Vehicles</button></a
  >
  </li>
  <li>
    <a href="../tyres/tyres.html"
      ><button class="navbar-button">Tyres</button></a
    >
  </li>
  <li>
    <a href="../oils/oils.html"
      ><button class="navbar-button">Oils</button></a
    >
  </li>`;
  const dropdownButton = document.getElementById("dropdown-button");
  dropdownButton.addEventListener("click", () => {
    const dropdownContentContainer =
      document.getElementById("dropdown-content");
    if (dropdownContentContainer.innerHTML === "") {
      dropdownContentContainer.innerHTML = dropdownContent;
    } else {
      dropdownContentContainer.innerHTML = "";
    }
  });
});
