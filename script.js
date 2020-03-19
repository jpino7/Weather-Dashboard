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
        }

    })
});