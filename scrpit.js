/// var declereations

const input = document.getElementById("input");
const city = document.getElementById("city");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
const avgTemp = document.getElementById("averageTemp");
const background = document.getElementById("container");
const submit = document.getElementById("submit");
const temp = document.getElementById("temps");
// const api = document.getElementById("api");
const apiKey = "42f6f9851217d7e7ea387a5223db02c3";

// function on inputs

input.addEventListener("keyup", getcity);
function getcity() {
  city.innerHTML = input.value;
}

//function on button
submit.addEventListener("click", handleClick);
function handleClick(e) {
  e.preventDefault();

  fetch(`api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

  // .catch((err) => alert("wrong city Name"));
}

var x = setInterval(function () {
  let currentTime = new Date().toTimeString();
  let currentDate = new Date().toDateString();
  document.getElementById("time").innerHTML = currentTime;
  document.getElementById("date").innerHTML = currentDate;
}, 1000);

// function to change background
let xuz = new Date().getHours();
// let xuz = 18;

console.log(xuz);

if (0 <= xuz && xuz <= 6) {
  background.setAttribute("class", "nightTime");
} else {
  if (7 <= xuz && xuz <= 17) {
    background.setAttribute("class", "dayTime");
  } else {
    if (17 < xuz && xuz <= 19) {
      background.setAttribute("class", "eveningTime");
    } else {
      if (20 <= xuz && xuz <= 23) {
        background.setAttribute("class", "nightTime");
      }
    }
  }
}

// `api.openweathermap.org/data/2.5/weather?q=` +
//   input.value +
