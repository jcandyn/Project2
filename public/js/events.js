$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function (data) {
        console.log(data)
    });





    function createEvent(theEvent) {
        $.post("/api/events", theEvent, function () {
            alert("Event Created!");
        });
    };

    function updateEvent(theEvent) {
        $.ajax({
            method: "PUT",
            url: "/api/events",
            data: theEvent
        }).then(function (result) {
            console.log(result);
        });
    };

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var newEventTitle = $("#event-title").val().trim();
        var newEventDesc = $("#event-desc").val().trim();
        var newEventCat = $("#event-category").val().trim();
        var newEventLocation = $("#event-location").val().trim();
        var newEventDate = $("#event-date").val();
        var newEventTime = $("#event-time").val().trim();
    

        newEvent = {
            title: newEventTitle,
            description: newEventDesc,
            category: newEventCat,
            location: newEventLocation,
            date: newEventDate,
            time: newEventTime,
            UserId: 1234567890
        };
        createEvent(newEvent);
    });

    $("#update").on("click", function (event) {
        event.preventDefault();

        var updatedTitle = $("#update-title").val().trim();
        var updatedDesc = $("#update-desc").val().trim();
        var updatedCat = $("#update-category").val().trim();
        var updatedLocation = $("#update-location").val().trim();
        var updatedDate = $("#update-date").val().trim();
        var updatedTime = $("#update-time").val().trim();

        updatedEvent = {
            title: updatedTitle,
            description: updatedDesc,
            category: updatedCat,
            location: updatedLocation,
            date: updatedDate,
            time: updatedTime,
            UserId: data.username
        };
        updateEvent(updatedEvent);
    })









});
