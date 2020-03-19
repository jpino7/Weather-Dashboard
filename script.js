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
    })
});