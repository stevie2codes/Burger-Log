
$(function () {
        /* Change burger status to devoured */
    $(".devour").on("click", function(event) {
        let id = $(this).data("name");
        let newState = true;
  
        let devouredState = {
          devoured: newState
        }
        // Send the PUT request.
        $.ajax("/api/newburger/" + id, {
          type: "PUT",
          data: devouredState
        }).then(
          function() {
            console.log("success");
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
            devoured: true
        };
        $.ajax("/api/newBurger", {
            type: "POST",
            data: newBurger
        }).then(function (data) {
            console.log(data);
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