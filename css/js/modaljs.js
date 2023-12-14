// Відкрити модальне вікно
document
  .getElementById("open-mobile-btn")
  .addEventListener("click", function () {
    document.getElementById("my-mobile").classList.add("open");
  });

//   Закрити модальне вікно
document
  .getElementById("close-my-mobile-btn")
  .addEventListener("click", function () {
    document.getElementById("my-mobile").classList.remove("open");
  });

//   Закрити модальне вікно при натисканні на Esc

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-mobile").classList.remove("open");
  }
});

// Закрите модальне вікно при натисканні поза вікном
document
  .querySelector("#my-mobile .mobile__box")
  .addEventListener("click", (event) => {
    event._isClickWithInMobile = true;
  });

document.getElementById("my-mobile").addEventListener("click", (event) => {
  if (event._isClickWithInMobile) return;
  event.currentTarget.classList.remove("open");
});
