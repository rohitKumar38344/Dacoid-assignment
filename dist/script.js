const registerForm = document.getElementById("content-1");
const loginForm = document.getElementById("content-2");
const loginMsg = document.querySelector(".login-msg");
const registerMsg = document.querySelector(".register-msg");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".create-account-link");

loginLink.addEventListener("click", function (e) {
  e.preventDefault();
  registerForm.classList.toggle("hidden");
  loginMsg.classList.toggle("hidden");
  loginForm.classList.toggle("hidden");
  registerMsg.classList.toggle("hidden");
});

registerLink.addEventListener("click", function (e) {
  e.preventDefault();
  registerForm.classList.toggle("hidden");
  loginMsg.classList.toggle("hidden");
  loginForm.classList.toggle("hidden");
  registerMsg.classList.toggle("hidden");
});
