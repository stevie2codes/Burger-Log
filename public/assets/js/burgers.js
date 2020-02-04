import { identifier } from "@babel/types";

$(function() {

    $(".add").on("click", function(event) {
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

$(".destroy").on("click", function(){
    let id = $(this).data("id");
    $.ajax("/api/newBurger" + id, {
        type: "DELETE"
    }).then(
        function(){
            console.log("deleted", id);
            location.reload();
        }
    )
});
});