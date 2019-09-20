
$(document).ready(function(){

  var allEvents = $("#all_events");
  var userId;

  if(window.location.search.indexOf("?user_id=") !== -1){
    userId = url.split("=")[1];
    getEvents(userId)
  } else {
    getEvents();
  }



function getEvents(user){
  userId = user || "";
  if(userId) {
    userId = "/?user_id=" + userId
  }
  $.get("/api/events" + userId, function(data){
    console.log("Events", data);
    events = data;
    if (!events || !events.length){
      noEvents(user);
    }
    else {
      populateEvents();
    }
  })
}

function noEvents(id){
  var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for user #" + id;
    }
    allEvents.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No events yet" + partial + ", navigate <a href='/create" + query +
    "'>here</a> in order to get started.");
    allEvents.append(messageH2);
}


function populateEvents(){
  $.get("/api/events").then(function(data) {
    console.log(data)
   let text = $("<p>").text(JSON.stringify(data));
    let textContainer = $("<div>").append(text);
    allEvents.append(textContainer);
  });
}

  

});