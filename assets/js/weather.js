var apiKey = "f9b1438904b068807690406f69dd80cc";

var searchHistory;
if(JSON.parse(localStorage.getItem("history")) != null) 
    searchHistory = JSON.parse(localStorage.getItem("history"));
else
    searchHistory = [];

var searchBtn = document.createElement("search-button");
searchBtn.addEventListener("click", searchResults);

searchList();

function searchResults() {
    var search = document.getElementById("search").value;
    if (document.getElementById("search").value !=="") {
        
        weatherSearch(search);
        forcastSearch(search);

        saveSearch(search);
        renderSearch();

        document.getElementById("search").value = "";
    }
};

function weatherSearch(search) {
    var todayHeader = document.getElementById("today-header");
    todayHeader.className = "";

    var api = "api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API key}&units=imperial";
    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            var todayE1 = document.getElementById("today");
            todayE1.textContent = "";

            var cardHeader = document.createElement("h3");
            cardHeader.className = "card-title";
            cardHeader.textContent = data.name + "-" + moment().format("LL");

            var cardContainer = document.createElement("div");
            cardContainer.className = "card";

            var card = document.createElement("div");
            card.className = "card-body";

            var wind = document.createElement("p");
            wind.className = "card-text";

            var humidity = document.createElement("p");
            humidity.className = "card-text";
            humidity.textContent = "Humidity: " + data.main.humidity + "%";

            var temperature = document.createElement("p");
            temperature.className = "card-text";
            temperature.textContent = "Temperature: " + data.main.temp + "°F";

            var uvIndex = document.createElement("p");
            uvIndex.className = "card-text";

            fetch("http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${data.coord.lat}&lon=${data.coord.lon}")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    uvIndex.textContent = "UV Index: " + data.value;
                    if (data.value < 7)
                        uvIndex.className = "text-warning";
                    if (data.value < 3)
                        uvIndex.className = "text-primary"
                    else 
                        uvIndex.className = "text-danger";
                });

            var imgE1 = document.createElement("img");
            imgE1.setAttribute("src", 'http://openweathermap.org/img/wn/${data.weather[0].icon}.png');

            cardHeader.appendChild(imgE1);
            card.appendChild(cardHeader);
            card.appendChild(temperature);
            card.appendChild(humidity);
            card.appendChild(wind);
            card.appendChild(uvIndex);
            cardContainer.appendChild(card);
            todayE1.appendChild(cardContainer);
        });
}

function forecastSearch() {
    var forecastHeader = document.getElementById("forecast-header");
    forecastHeader.className = "";

    
}