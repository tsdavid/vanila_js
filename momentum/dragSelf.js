// let target_drag = document.querySelector('#js-drag-target'),
//     initX, initY, firstX, firstY;
// let js_box = document.querySelector('.js-box'); // 실질적으로 움직일 대상

// target_drag.addEventListener('mousedown', function(e) {

//     e.preventDefault();
//     initX = js_box.offsetLeft;
//     initY = js_box.offsetTop;
//     firstX = e.pageX;
//     firstY = e.pageY;

//     this.addEventListener('mousemove', dragIt, false);

//     window.addEventListener('mouseup', function() {
//         target_drag.removeEventListener('mousemove', dragIt, false);
//     }, false);

// }, false);

// function dragIt(e) {
//     js_box.style.left = initX + e.pageX - firstX + 'px';
//     js_box.style.top = initY + e.pageY - firstY + 'px';
// }