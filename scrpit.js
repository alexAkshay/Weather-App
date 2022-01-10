/// var declereations

const input = document.getElementById("input");
const city = document.getElementById("city");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
const avgTemp = document.getElementById("averageTemp");
const background = document.getElementById("container");
const submit = document.getElementById("submit");

// function on inputs

input.addEventListener("keyup", getcity);
function getcity() {
  city.innerHTML = input.value;
}
//function on button

function handleClick() {
  fetch(
    "api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid = f3e6a40e7d873f042984b1405049f14e"
  )
    .then((result) => result.json)
    .then((data) => console.log(data));
}

// function releted to time

var x = setInterval(function () {
  var now = new Date().getTime();

  var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((now % (1000 * 60)) / 1000);

  // if (1 <= hours <= 2) {
  //   background.setAttribute("class", "datTime");
  // } else {
  //   if (10 <= hours <= 19) {
  //     background.setAttribute("class", "eveningTime");
  //   } else {
  //     background.setAttribute("class", "nightTime");
  //   }
  // //    break;
  // }

  document.getElementById("time").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}, 1000);
