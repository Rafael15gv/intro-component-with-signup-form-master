const form = document.querySelector(".form");

// Lista de campos a validar
const fields = [
  { selector: ".form__fName", errorId: "#e_Fname" },
  { selector: ".form__lName", errorId: "#e_Lname" },
  { selector: ".form__email", errorId: "#e_Email", validate: validateEmail },
  { selector: ".form__pass", errorId: "#e_Pass", validate: validatePassword },
];

// Función de validación genérica
function validateField(input, errorElement, customValidation) {
  const value = input.value.trim();

  if (!value) {
    errorElement.classList.remove("hidden");
    return false;
  } else {
    errorElement.classList.add("hidden");
  }

  if (customValidation && !customValidation(value)) {
    errorElement.classList.remove("hidden");
    return false;
  }

  return true;
}

// Función de validación para email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función de validación para password (ejemplo: mínimo 6 caracteres)
function validatePassword(password) {
  return password.length >= 6;
}

// Evento de submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  for (const { selector, errorId, validate } of fields) {
    const input = document.querySelector(selector);
    const errorElement = document.querySelector(errorId);
    if (!validateField(input, errorElement, validate)) {
      isValid = false;
    }
  }

  if (isValid) {
    alert("Formulario enviado con éxito!");
  }
});
