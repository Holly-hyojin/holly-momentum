const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const mins = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  // `${hours}:${mins}:${sec}`; {a<b ? do1 : do2}
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    //${부분을 엔터치면 시간 표시가 한 줄 내려감
    mins < 10 ? `0${mins}` : mins
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
