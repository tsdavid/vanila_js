const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('h1'); //clockContainer의 자식 ele를 찾아주네

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds // python labmda와 비슷한 느낌, 작은 조건문 ,  "조건 ? 조건 반응 : 그 외"
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
