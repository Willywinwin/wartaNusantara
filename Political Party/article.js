const buttons = document.querySelectorAll(".lang button");
const translatable = document.querySelectorAll("[data-id]");

translatable.forEach(function (element) {
  element.dataset.en = element.innerHTML;
});

function setLanguage(lang) {
  document.documentElement.lang = lang;

  translatable.forEach(function (element) {
    element.innerHTML = element.dataset[lang];
  });

  buttons.forEach(function (button) {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    setLanguage(button.dataset.lang);
  });
});
