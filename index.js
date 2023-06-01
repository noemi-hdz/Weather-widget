let now = new Date();
let day = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
const date = document.getElementById("date");
date.innerHTML = ` ${month} ${day}, ${year} ${hour}:${minutes}`;

function currentCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#current-city");
  let cityInput = form.querySelector("#search-input");
  searchInput.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", currentCity);

function showTemperature(response) {
  console.log(response);
  let city = response.data.name;
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = city;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `${temperature}˚F`;
}
function searchCity(city) {
  let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}
searchCity("Bastrop");
