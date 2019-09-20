
$(document).ready(function () {

  var allEvents = $("#all_events");
  var userId;

  if (window.location.search.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    getEvents(userId)
  } else {
    getEvents();
  }



  function getEvents(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId
    }
    $.get("/api/events" + userId, function (data) {
      console.log("Events", data);
      events = data;
      if (!events || !events.length) {
        noEvents(user);
      }
      else {
        populateEvents();
      }
    })
  }

  function noEvents(id) {
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


  function populateEvents() {
    $.get("/api/events").then(function (data) {
      console.log(data)
      var eventData = data;
      for (let i = 0; i < eventData.length; i++) {
        let newCardData = eventData[i]
        createNewCard(newCardData)
      };


      //  let text = $("<p>").text(JSON.stringify(data));
      //   let textContainer = $("<div>").append(text);
      //   allEvents.append(textContainer);
    });
  };


  function createNewCard(x) {
    const mainContainer = $("#all_events");
    // const newCardContainer = $("<div>").addClass("row")
    // const newPostCard = $('<div>').addClass("card")
    // const newPostTitle = $("<h5>").addClass('card-title');
    // const newPostDate = $("<p>").addClass('card-text');
    // const newCardBody = $("<div>").addClass("card-body");
    // const newPostLocation = $("<p>").addClass('card-text');
    // const newPostCategory = $("<p>").addClass('card-text');
    // const newPostTime = $("<p>").addClass('card-text');
    // const newPostDescription = $("<p>").addClass('card-text');
    // const newPostImg = $("<img>").addClass("card-img-top")
    // const newBtn = $("<a>").addClass("waves-effect waves-light btn modal-trigger").attr("href", "#modal1").text("Join").css("color", "white").css("cursor", "pointer")
    // // .attr("item",x.name)
    // // .attr("type",x.product_type)
    // newPostTitle.text(x.title)
    // newPostLocation.text(x.location)
    // newPostDate.text(x.date)
    // newPostTime.text(x.time)
    // newPostCategory.text(x.category)
    // newPostDescription.text(x.description)
    // newPostImg.attr("src", "")
    // newPostCard.append(newPostImg)
    // newCardBody.append(newPostTitle)
    // newCardBody.append(newPostLocation)
    // newCardBody.append(newPostDate)
    // newCardBody.append(newPostTime)
    // newCardBody.append(newPostDescription)
    // newCardBody.append(newPostCategory)
    // newCardBody.append(newBtn)
    // newPostCard.append(newCardBody)
    // newCardContainer.append(newPostCard)
    // cardGroup.append(newCardContainer)
    // mainContainer.append(cardGroup)


    var altTestCard = '<div class="card main"><img src="https://ak8.picdn.net/shutterstock/videos/3635288/thumb/1.jpg" style="width: 213px" style="height: 100px" class="card-img-top" alt="#"><div class="card-body"><h5 class="card-title event-title">' + x.title + '</h5><br><p class="card-text event-desc">'+x.description+'</p><br><p class="card-text event-deets">Location: '+x.location+'</p><p class="card-text event-deets">Date: '+x.date+'</p><p class="card-text event-deets">Time: '+x.time+'</p></div></div>';

    mainContainer.append(altTestCard);
  }



});