
$(function () {
        /* Change burger status to devoured */
    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          sleepy: newSleep
        };
    
        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
          type: "PUT",
          data: newSleepState
        }).then(
          function() {
            console.log("changed sleep to", newSleep);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
            /* Add New Burger Entry */
    $(".add").on("click",(event)=> {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: false
        };
        $.ajax("/api/newBurger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });

    $(".destroy").on("click", function () {
        let id = $(this).data("id");
        $.ajax("/api/newBurger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload(); 
            }
        );
    });
});