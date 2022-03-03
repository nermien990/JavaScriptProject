import Data from "./userRegister.js";

let vMail = document.getElementById("_email");
let vPass = document.getElementById("_pass");
let form = document.getElementById("form");

// form.addEventListener("submit", checkData);
function checkData() {
  if (localStorage.getItem("RegisterData") == null) {
    alert("you have no account please register first");
  } else if (!localStorage.getItem("RegisterData").match(vMail.value)) {
    alert("email is incorrect");
  } else if (!localStorage.getItem("RegisterData").match(vPass.value)) {
    alert("password is in correct");
  } else {
    let user = new Data(vMail.value, vPass.value);
    localStorage.setItem("loginData", JSON.stringify(user));
  }
}
// vMail.addEventListener("blur", checkMail);

form.addEventListener("submit", checkData);
