// jQuery call function for all data
$(document).ready(function () {
    var citySearch = "";
    var city = document.getElementById("#city")

    // Insert Date
    const today = new Date();
    $("#date").text(today.toDateString());