// jQuery call function for all data
$(document).ready(function () {
    var citySearch = "";
    var city = document.getElementById("#city")

    // Insert Date
    const today = new Date();
    $("#date").text(today.toDateString());

    //Event Listener to search button
    $(".button").on("click", function () {
        console.log("You got clicked!")

        //Assigning the input a value & Storing it
        citySearch = $("#city").val();
        localStorage.setItem("recentCity", citySearch);
        var recentSearch = localStorage.getItem("recentCity");

        // City Searched gets appended & listed to Recent Searches
        $(city).text(name + citySearch);
        $("#recent").append("<li>" + recentSearch + "</li>");

        // Current Weather API
        var apiKey = "8dff60bdfed03c1b84b019f5b557e9e8";
        var currentQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=${apiKey}`
        // `https://api.openweathermap.org/data/2.5/weather?q=Tucson,Arizona&units=imperial&appid=8dff60bdfed03c1b84b019f5b557e9e8`

        // Performing AJAX GET request to currentQueryURL
        $.ajax({
            url: currentQueryURL,
            method: "GET"
        // Data from AJAX request
        }).then (function (response){
            // Logging response
            console.log(response);
            var name = response.name;
            var temperature = response.main.temp;
            var humidity = "Humidity: " + response.main.humidity + "%";
            var windSpeed = "Wind Speed: " + response.wind.speed + "MPH";
            var icon = response.weather[0].icon;
            var answer = null;
            if (temperature < 70) {
                answer = "COVID-19 at its MAX!! Please wash your hands, sanitize, and stay home if feeling sick!!"
            }
            else {
                answer = "It's BEACH Time!!"
            };
        // Card info for Today's Weather
        var today = $(".today")
        var todayDetails = $("<div>").html(`<div class="card" style="width: 100%; margin-bottom: 20px;">
            <div class=card-body">
                <h3>${name}<img src="https://openweathermap.org/img/wn/${icon}@2x.png"></h3>
                <p class="card-text">Temp: ${temperature}° F</p>
                <p class="card-text">${humidity}</p>
                <p class="card-text">${windSpeed}</p>
                <p class="card-text">Weather or Not: ${answer}</p>
            </div>
            </div>`);
                // Appending today details
            today.append(todayDetails);
        })
    })
});
