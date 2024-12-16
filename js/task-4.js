const form = document.querySelector(".login-form");

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  if (form.email.value.length === 0 || form.password.value.length === 0) {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      [form.elements.email.name]: form.elements.email.value,
      [form.elements.password.name]: form.elements.password.value,
    };

    console.log(formData);

    form.reset();
  }
}
