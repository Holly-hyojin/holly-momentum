const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STO = "currentUser",
  SHOWING_CLASSNAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STO, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentVal = input.value;
  paintGreeting(currentVal);
  saveName(currentVal);
}

function askForName() {
  form.classList.add(SHOWING_CLASSNAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = `Hi ${text}, Have a great day!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STO);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
