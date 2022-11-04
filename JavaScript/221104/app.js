const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const helloText = document.querySelector("#hello-text");

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  loginForm.classList.add("hidden");
  helloText.classList.remove("hidden");
  helloText.innerText = `Hello, ${username} ! Have a good day!`;
}
loginForm.addEventListener("submit", onLoginSubmit);
