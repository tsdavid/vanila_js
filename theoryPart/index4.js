/* html은 html에서 css는 css에서 js는 로직 관리만 할 수 있게 분리해서 빌드하자
js가 디자인 직접 바꾸고 하면 관리가 어려워짐 */

const title = document.querySelector('#title');
const CLICKED_CALSS = 'clicked';

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CALSS);
  if (!hasClass) {
    title.classList.add(CLICKED_CALSS);
  } else {
    title.classList.remove(CLICKED_CALSS);
  }
}

// use toggle instead of add and remove it is way more easy
function handleClick2() {
  title.classList.toggle(CLICKED_CALSS);
}

function init() {
  title.addEventListener('click', handleClick2);
}
init();
