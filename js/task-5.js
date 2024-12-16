function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();
  let newColor = getRandomHexColor();

  bodyEl.style.backgroundColor = newColor;
  colorName.innerHTML = newColor;
}
 