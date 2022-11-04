const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("h1");

function loginClick(event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", loginClick);
