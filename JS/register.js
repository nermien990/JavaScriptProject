import Data from "./userRegister.js";

let registerData;
if (localStorage.RegisterData != null) {
  registerData = JSON.parse(localStorage.RegisterData);
} else {
  registerData = [];
}

let vn = document.getElementById("_name");
let vm = document.getElementById("_mail");
let vp = document.getElementById("_phone");
let vpass = document.getElementById("_pass");
let vcpass = document.getElementById("_c_pass");

let v_mail = /@[a-z].[a-z]/;

vn.addEventListener("blur", ValidateName);
vm.addEventListener("blur", ValidateMail);
vp.addEventListener("blur", ValidatePhone);
vpass.addEventListener("blur", ValidatePass);
vcpass.addEventListener("blur", ValidateConfirmPass);

function ValidateName() {
  if (vn.value == null || vn.value === "") {
    alert("Name is required");
  } else if (vn.value.length > 0 && vn.value.length < 4) {
    alert("Your Name must be at least 4 Characters");
  } else if (vn.value.length >= 4 && vn.value.length > 16) {
    alert("Your Name must be less than 16 characters");
  }
}

function ValidateMail() {
  if (vm.value == null || vm.value === "") {
    alert("Mail is required");
  } else if (!v_mail.test(vm.value)) {
    alert("Your Mail must be in pattern mail");
  }
}

function ValidatePhone() {
  if (vp.value == null || vp.value === "") {
    alert("Phone is required");
  } else if (!vp.value.startsWith("01")) {
    alert(
      "please enter avalid Phone Number, phone number must be started with 01"
    );
  } else if (vp.value.search(/[a-z]/i) > 0) {
    alert("please enter avalid Phone Number, phone mustn`t contain characters");
  } else if (vp.value.length < 11 || vp.value.length > 11) {
    alert("please enter avalid Phone Number, phone must contain 11 numbers");
  }
}

function ValidatePass() {
  if (vpass.value == null || vpass.value === "") {
    alert("Password is required");
  } else if (vpass.value.length < 6) {
    alert("pasword should be at least 6 characters");
  } else if (vpass.value.length > 16) {
    alert("pasword should be at less than 16 characters");
  }
}

function ValidateConfirmPass() {
  if (vcpass.value == null || vcpass.value === "") {
    alert("Password is required");
  } else if (vcpass.value != vpass.value) {
    alert("password not matched please write password again");
  }
}

// submit validate
let form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
  if (
    vn.value === "" ||
    vm.value === "" ||
    vp.value === "" ||
    vpass.value === "" ||
    vcpass.value === ""
  ) {
    alert("please insert all your data");
  } else {
    let userData = new Data(
      vn.value,
      vm.value,
      vp.value,
      vpass.value,
      vcpass.value
    );
    registerData.push(userData);
    localStorage.setItem("RegisterData", JSON.stringify(registerData));
    vn.value = "";
    vm.value = "";
    vp.value = "";
    vpass.value = "";
    vcpass.value = "";
  }
}
form.addEventListener("submit", handleForm);
