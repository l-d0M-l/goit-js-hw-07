const inputForm = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

inputForm.addEventListener("input", outputName);

function outputName() {
  inputForm.value = inputForm.value.trim();
  if (inputForm.value.length != 0) {
    nameOutput.innerHTML = inputForm.value;
  } else {
    nameOutput.innerHTML = "Anonymous";
  }
}
 