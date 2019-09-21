const POSITION = 'position';
let target_drag = document.querySelector('#js-drag-target'), // drag가 되는 대상
    initX,
    initY,
    firstX,
    firstY;

let js_box = document.querySelector('.js-box'); // 실질적으로 움직일 대상

function loadPosition() {
    const currentPosition = localStorage.getItem(POSITION);
    const parsedPosition = JSON.parse(currentPosition);
    xPosition = parsedPosition.positionX;
    yPosition = parsedPosition.positionY;
    return [xPosition, yPosition];
}


function savePosition(postionObj) {
    localStorage.setItem(POSITION, JSON.stringify(postionObj));
}

function initPosition() {
    js_box.style.left = loadPosition()[0];
    js_box.style.top = loadPosition()[1]
}

function mouseDown(event) {
    event.preventDefault();
    initX = js_box.offsetLeft; // 실질적으로 움직일 대상의 위치를 저장
    initY = js_box.offsetTop; // 위에 let에서는 그냥 변수를 생성한거고, 여기서 변수 값을 넣은거 같음
    // initX = loadPosition()[0]
    // initY = loadPosition()[1]
    firstX = event.pageX;
    firstY = event.pageY;

    this.addEventListener('mousemove', dragIt, false);

    window.addEventListener(
        'mouseup',
        function() {
            target_drag.removeEventListener('mousemove', dragIt, false);
        },
        false
    );
}

target_drag.addEventListener('mousedown', mouseDown, false);

function dragIt(event) {
    js_box.style.left = initX + event.pageX - firstX + 'px'; // 실질적을 움직일 대상의 위치를 변경해준다
    js_box.style.top = initY + event.pageY - firstY + 'px';
    postionObj = {
        positionX: js_box.style.left,
        positionY: js_box.style.top,
    };
    savePosition(postionObj);
}

initPosition()