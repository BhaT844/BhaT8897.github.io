const clock = document.getElementById("clock");
const timer = document.getElementById("timer");
const timerForm = document.getElementById("timer-form");
const dateInput = document.querySelector(".input-date");
const timerDiv = document.getElementById("timer-div");
const timerButton = timerDiv.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const TIMER_KEY = "timer";

let date;

const saveTimer = () => {
  localStorage.setItem(TIMER_KEY, JSON.stringify(date));
};

const deleteTimer = () => {
  timerForm.classList.remove(HIDDEN_CLASSNAME);
  timerDiv.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(TIMER_KEY);
};

const getClock = () => {
  const date = new Date();
  
  const hours   = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

const getTime = () => {
  const xmasDay = new Date(`${date}:00:00:00+0900`);
  const now = new Date();

  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  timer.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
};

const handleTimerSubmit = event => {
  event.preventDefault();
  timerDiv.classList.remove(HIDDEN_CLASSNAME);
  timerForm.classList.add(HIDDEN_CLASSNAME);
  date = dateInput.value;
  getTime();
  clearInterval(timerId);
  setInterval(getClock, 1000);
  setInterval(getTime, 1000);
  saveTimer();
};

timerForm.addEventListener("submit", handleTimerSubmit);

timerButton.addEventListener("click", deleteTimer);

getClock();
const timerId = setInterval(getClock, 1000);

const savedTimer = localStorage.getItem(TIMER_KEY);

if(savedTimer !== null) {
  const parsedTimer = JSON.parse(savedTimer);
  date = parsedTimer;
  timerDiv.classList.remove(HIDDEN_CLASSNAME);
  timerForm.classList.add(HIDDEN_CLASSNAME);
  getTime();
  setInterval(getTime, 1000);
}
