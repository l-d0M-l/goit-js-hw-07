function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const mainBox = document.querySelector("#controls");

let resultBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const elements = [];
  let size = 30;
  if (amount <= 100 && amount > 0) {
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      size += 10;
      elements.push(div);
    }

    // Додаємо всі елементи
    resultBoxes.append(...elements);
  } else {
    alert("введіть правильне число контейнерів");
  }
}

createBtn.addEventListener("click", createHandler);

function createHandler(event) {
  event.preventDefault();

  const quantityBoxes = mainBox.children[0].value;
  mainBox.children[0].value = 0;
  createBoxes(quantityBoxes);
}

destroyBtn.addEventListener("click", destroyHandler);
function destroyHandler(event) {
  event.preventDefault();

  resultBoxes.innerHTML = "";
  mainBox.children[0].value = 0;
}
