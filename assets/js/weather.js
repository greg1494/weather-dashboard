
// api key
var apiKey = "ff9b1438904b068807690406f69dd80cc";

// Search function variables
var userFormE1 = document.querySelector("#user-form");
var historyE1 = document.querySelector("#searchHistory");
var cityInputE1 = document.querySelector("#city");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// Current forecast variables
var tempContainerE1 = document.querySelector("#temp-Container");
var windContainerE1 = document.querySelector("#wind-container");
var humidityContainerE1 = document.querySelector("#humidity-container");
var uvContainerE1 = document.querySelector("#uv-container");

// Five Day Forecast variables
var forecastE1 = document.querySelectorAll(".forecast");

// Function to handle search input 
var formSubmitHandler = function(event) {
    event.preventDefault();
    //console.log(event);
    var city = cityInputE1.value.trim();
    if(city) {
        getWeather(city);
        searchHistory.push(city);
        localStorage.setItem("search",JSON.stringify(searchHistory));
        renderSearchHistory();
    }
};

// Function to gather the weather data from a third party weather application
var getWeather = function(cityName) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(apiURL).then(function (response) {
        if(response.ok) {
            //console.log(response);
        response.json().then(function(data) {
            console.log(data);
            displayWeather(data, cityName);
            displayForecast(data, cityName);
        });
        } else {
            alert("Error: " + response.StausText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to open weather");
    });
};

userFormE1.addEventListener("submit", formSubmitHandler);
