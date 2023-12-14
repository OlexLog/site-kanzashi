// Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  // Объявляем переменную для счетчика
  let counter;
  // Проверяем клик строго по кнопкам Плюс или минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим обвертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    // Находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем является ли элемент Плюс
  if (event.target.dataset.action === "plus") {
    // изменяем в счетчике его на 1
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент Минус
  if (event.target.dataset.action === "minus") {
    // Проверяем  чтобы счетчик был больше
    if (parseInt(counter.innerText) > 1) {
      // изменяем в счетчике его на 1
      counter.innerText = --counter.innerText;
    } else if (
      // Проверка на товар который находится в корзине
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      // удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      // Отображение статуса корзины
      toggleCartStatus();
      //Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на + или - - внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    //Пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }
});
