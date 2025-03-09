const btn = document.querySelector(".form__btn");
const form = document.querySelector(".form");
const e_Fname = document.querySelector("#e_Fname");
const e_Lname = document.querySelector("#e_Lname");
const e_Email = document.querySelector("#e_Email");
const e_Pass = document.querySelector("#e_Pass");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputFname = document.querySelector(".form__fName").value;
  let inputLname = document.querySelector(".form__lName").value;
  let inputEmail = document.querySelector(".form__email").value;
  let inputPass = document.querySelector(".form__pass").value;

  if (inputFname == "") {
    e_Fname.classList.remove("hidden");
  } else {
    e_Fname.classList.add("hidden");
  }

  if (inputLname == "") {
    e_Lname.classList.remove("hidden");
  } else {
    e_Lname.classList.add("hidden");
  }
  if (inputEmail == "") {
    e_Email.classList.remove("hidden");
  } else {
    e_Email.classList.add("hidden");
  }
  if (inputPass == "") {
    e_Pass.classList.remove("hidden");
  } else {
    e_Pass.classList.add("hidden");
  }
});
