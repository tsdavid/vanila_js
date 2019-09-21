const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // default 되어있는 새로고침을 막고, LS에 저장하고싶음
  event.preventDefault(); //default를 막은 상태
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
  
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `WELCOME, MR.${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // he is not
    askForName();
  } else {
    // he is
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
