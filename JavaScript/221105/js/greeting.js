const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const helloText = document.querySelector("#hello-text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  viewHelloText(savedUserName);
}

function viewHelloText(username) {
  helloText.innerText = `Hello, ${username} ! Have a good day!`;
  helloText.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  viewHelloText(username);
}
