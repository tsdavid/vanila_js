const weather = document.querySelector('.js-weather');

const API_KEY = '132c7c9355fa988908096a9d5c9fd69a';
const COORDS = 'coords';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}*,  @${place}`;
    }); //then은 api로 정보가 들어오는데 시간이 오래 걸릴 수 있으니까, then으로 데이터가 완전히 들어온 다음에 호출하는 거임
}
// js machine이랑 통신, 새로고침 없이 데이터를 가지고 올 수 있다
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(positon) {
  console.log(positon.coo);
  const latitude = positon.coords.latitude;
  const longitude = positon.coords.longitude;
  const coordsObj = {
    latitude, //latitude: latitude 이거와 같음
    longitude, //longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoErro() {
  console.log('Cant access geo location');
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro); // 브라우저에서 팝업으로 allow 요청이 옴
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
