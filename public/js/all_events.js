$.get("/api/events").then(function(data) {
    console.log(data)
   let text = $("<p>").text(JSON.stringify(data));
    let textContainer = $("<div>").append(text)
    $("all_events").append(textContainer)
   
  });