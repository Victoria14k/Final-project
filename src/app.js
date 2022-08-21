function displayTemperature(response){
console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let feelslikeElement = document.querySelector("#feels-like");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#windspeed");
cityElement.innerHTML = response.data.name;
temperatureElement.innerHTML = Math.round(response.data.main.temp);
descriptionElement.innerHTML = response.data.weather[0].description;
feelslikeElement.innerHTML = Math.round(response.data.main.feels_like);
humidityElement = response.data.main.humidity;
windElement = Math.round(response.data.wind.speed);

}

let apiKey = "a2095828db09eb62d8b590f3de4c1377";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);