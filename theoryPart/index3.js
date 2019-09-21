// Listen to Window

function handleResize(event) {
  // evenlister는 JS가 자동으로 함수에 객체를 설정함, 따로 설정하지 않아도 자동으로 붙음
  console.log(event);
  console.log('I have been resized');
}
window.addEventListener('resize', handleResize); // addEventLister(event 대상, 그 대상에 적용할 함수))
// 함수 호출 방법 예시를 handleResize로
// handleResize -> 함수를 필요로 할 때, 호출해라
// handleResize() -> 함수를 바로 호출해라

const title = document.querySelector('#title');
const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#b2bec3';

function handleClick() {
  const currnetColor = title.style.color;
  if (currnetColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
}
title.addEventListener('mouseenter', handleClick); // way to find evnet https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
init();

// if - else
/*
if (condition){
    block <- js expression
} else if (condition){
    block
} else{

}
"===" -> "==" in python
"&&" -> "and" in python
"||" -> "or" in python
*/

// // if else practice
// const age = prompt('Ask Something');

// if (age >= 18 && age <= 21) {
//   console.log('You can drink but you should not ');
// } else if (age > 21) {
//   console.log('Go Ahead');
// } else {
//   console.log('Too Young');
// }
