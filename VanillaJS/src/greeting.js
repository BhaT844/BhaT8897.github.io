const greetings = [
  "Hello,",
  "Welcome,",
  "Have a good time,",
  "Have a good day,"
];

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const greetingDiv = document.getElementById("greeting-div");
const greetingButton = greetingDiv.querySelector("button");

const USERNAME_KEY = "username";

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const deleteGreeting = () => {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greetingDiv.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
};

const handleLoginSubmit = event => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerHTML = `${randomGreeting} <i style="color: yellow;">${username}</i>`;
  greetingDiv.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  greeting.innerHTML = `${randomGreeting} <i style="color: yellow;">${savedUsername}</i>`;
  greetingDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

greetingButton.addEventListener("click", deleteGreeting);
