document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("grid");
  const cells = Array.from(grid.querySelectorAll(".grid-item"));
  let prevCellIndex;

  // Функция, которая перемещает изображение в случайную ячейку
  function moveImage() {
    const image = document.createElement("img");
    image.src = "src/img/goblin.png"; // Путь к изображению
    image.style.objectFit = "cover"; // Растягиваем изображение, чтобы оно полностью заполнило ячейку

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cells.length);
    } while (randomIndex === prevCellIndex); // Проверяем, чтобы новый индекс не совпадал с предыдущим
    prevCellIndex = randomIndex; // Обновляем предыдущий индекс

    const randomCell = cells[randomIndex];
    randomCell.innerHTML = ""; // Очищаем содержимое ячейки
    randomCell.appendChild(image); // Перемещаем изображение в выбранную ячейку
  }

  // Размещаем изображение в случайной ячейке при загрузке страницы
  moveImage();

  // Каждые 2 секунды меняем расположение изображения
  setInterval(function () {
    moveImage();
  }, 2000);
});
