const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
  //   console.log(event.target.parentNode); //event.target을 하면 해당 이벤트가 발생된 element를 리턴해준다
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); // HTML에서 해당 li를 삭제 한다. 따로 id나 조건을 맞출 필요없이 li를 넣으면 삭제되는 듯
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  // paseInt 데이터 타입 인트로 변환
  //filter는 함수를 실행할꺼임, forEach처럼 각각의 item이 해당 function과 함께 실행하거 인듯
  // toDos라는 array에서 각 요소를 꺼내서 fulterFn이라는 함수에 넣어서 boolean 타입으로 return을 함
  // 그리고 특정 return된 bool을 가지고 새로운 array를 만드는 데 사용, python filter랑 비슷
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // localstorage에는 string 말고 object는 저장이 안되서 object를 string으로 바꿔줄 json.stringify를 사용함
}

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerHTML = 'X';
  delBtn.addEventListener('click', deleteToDo); // delte btn 클릭시 event listener 임
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li); // li에 만든 span, delBtn을 todoList => js-toDoList에 넣는다
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // psuh는 array에 append하는 거
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ''; //todo 를 추가하면 작성된 input을 지우고 싶음
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // LS에 string으로 저장한걸 불러오면 당연히 string으로 불러져 나옴
    // 근데 우리는 출력을 object으로 하고 싶으니까, 다시 string -> object화 할 필요가 있음
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      // parsedToDos는 전체 정보를 담은 object
      // 전체 object에 forEach는 마치 python for 처럼 각 하나씩 출력해주는 느낌
      // 근데 forEach 인수를 함수로 받고 그 함수의 인수를 for 문 안에 돌아가는 원소 하나를 넣어야 함
      // function부분을 따로 함수화 해서 forEach에 호출해와도 상관없음
      paintToDo(toDo.text);
    });
  }
}
/*
JSON = JavaScript Object Notation의 준말
데이터를 전달할때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
 */

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
