$(document).ready(function(){

    var newEventTitle = $("#event-title").val().trim();
    var newEventDesc = $("#event-desc").val().trim();
    var newEventCat = $("#event-category").val().trim();
    var newEventLocation = $("#event-location").val().trim();
    var newEventDate = $("#event-date").val().trim();
    var newEventTime = $("#event-time").val().trim();
    
    var updatedTitle = $("#update-title").val().trim();
    var updatedDesc = $("#update-desc").val().trim();
    var updatedCat = $("#update-category").val().trim();
    var updatedLocation = $("#update-location").val().trim();
    var updatedDate = $("#update-date").val().trim();
    var updatedTime = $("#update-time").val().trim();


function createEvent(theEvent){
    $.post("/api/events", theEvent, function(){
        alert("Event Created!");
    });
};

function updateEvent(theEvent){
    $.ajax({
        method: "PUT",
        url: "/api/events",
        data: theEvent
    }).then(function(result){
        console.log(result);
    });
};

$("#submit").on("click", function(event){
    event.preventDefault();

    newEvent = {
        title: newEventTitle,
        description: newEventDesc,
        category: newEventCat,
        location: newEventLocation,
        date: newEventDate,
        time: newEventTime,
        UserId: data.username
    };
createEvent(newEvent);
});

$("#update").on("click", function(event){
    event.preventDefault();

    updatedEvent = {
        title: newEventTitle,
        description: newEventDesc,
        category: newEventCat,
        location: newEventLocation,
        date: newEventDate,
        time: newEventTime,
        UserId: data.username
    };
})









});
