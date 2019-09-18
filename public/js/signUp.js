$(document).ready(function() {

    let usernameSign_up;
    let nameSign_up;
    let emailSign_up;
    let passwordSign_up;
    
    $("#signUpBtn").on("click", function (event) {
        event.preventDefault()
        usernameSign_up = $("#usernameSign_up").val().trim()
        nameSign_up = $("#nameSign_up").val().trim()
        emailSign_up = $("#emailSign_up").val().trim()
        passwordSign_up = $("#passwordSign_up").val().trim()
    
        var user_data = {
            username: usernameSign_up,
            name: nameSign_up,
            email: emailSign_up,
            password: passwordSign_up,
            user_identifier: 1234567891
        }
    
        if (!user_data.username || !user_data.password) {
            return;
          }
          // If we have an email and password, run the signUpUser function
          signUpUser(user_data.username, user_data.password,user_data.user_identifier,user_data.name,user_data.email);
        //   usernameSign_up.val("");
        //   passwordSign_up.val("");
        //   emailSign_up.val("");
          $("#nameSign_up").val("");
          $("#emailSign_up").val("");
          $("#passwordSign_up").val("");
          $("#usernameSign_up").val("");
    
    });
    
    
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(username,password,user_identifier,name,email) {
      $.post("/api/signup", {
        username: username,
        password: password,
        user_identifier: user_identifier,
        name: name,
        email: email
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
    
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////     MODAL     ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".submit-button").on("click", function () {

    //Form validation
    function validate() {
        var valid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                valid = false;
            }
        });
        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                valid = false;
            }
        });
        return valid
    };

    if (validate()) {
        var userData = {
            name: $("#user_name").val().trim(),
            photo: $("#user_photo").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        var currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", userData, function (data) {
            $("#character-name").html(data.name)
            $("#modal-image").attr("src", data.photo)
            $("#friend_name").val("");
            $("#friend_image").val("");
        });

        $("#friend-modal").modal("show");

    } else {
        $("#invalid-modal").modal("show");
    }
});

$(".fan-match").on("click", function () {
    var currentURL = window.location.origin;
    $.ajax({
        url: currentURL + "/api/friends",
        method: "GET",
    }).then(function (response) {

        //Removes object just entered
        response.pop();

        var userData = {
            name: $("#user_name").val().trim(),
            photo: $("#user_photo").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        var scoreDifference = 0;

        var bestFanMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        }

        //Loop through array of friends
        for (var i = 0; i < response.length; i++) {

            //Reset the score difference to 0 for each friend we loop through
            scoreDifference = 0;

            //Loop through each friend's array of scores
            for (var j = 0; j < response[i].scores.length; j++) {

                //Calculate the score difference between each user score and each friend score
                scoreDifference += Math.abs(parseInt(userData.scores[j]) - parseInt(response[i].scores[
                    j]));
            };

            //Check if the score difference is less than the current best match in the loop
            if (scoreDifference < bestFanMatch.friendDifference) {
                bestFanMatch.name = response[i].name,
                    bestFanMatch.photo = response[i].photo,
                    bestFanMatch.friendDifference = scoreDifference
            };
        };

        $("#fan-name").html(bestFanMatch.name)
        $("#fan-modal-image").attr("src", bestFanMatch.photo)
        $("#fan-modal").modal("show");
    })
})