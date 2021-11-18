// api key
var apiKey = "f9b1438904b068807690406f69dd80cc";

// Search function variables
var userFormE1 = document.querySelector("#user-form");
var historyE1 = document.querySelector("#searchHistory");
var cityInputE1 = document.querySelector("#rcity");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// Current forecast variables
var tempContainerE1 = document.querySelector("#temp-Container");
var windContainerE1 = document.querySelector("#wind-container");
var humidityContainerE1 = document.querySelector("#humidity-container");
var uvContainerE1 = document.querySelector("#uv-container");

// Five Day Forecast variables
var forecastE1 = document.querySelectorAll(".forecast");