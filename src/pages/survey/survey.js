document.addEventListener("DOMContentLoaded", function () {
  const surveyForm = document.getElementById("survey-info");

  surveyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("survey-infos").value;

    let genderType;

    const genderRadios = document.getElementsByName("m-f");
    for (const radio of genderRadios) {
      if (radio.checked) {
        genderType = radio.id;
        break;
      } else genderType = "";
    }

    window.alert(`Thanks for the survey,${genderType} ${username}`);
  });
});
