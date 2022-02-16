function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "3fbdb2cb00e76a2efa935fc6f7334120";
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;
axios.get(apiurl).then(displayTemperature);
