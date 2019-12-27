const express = require("express");
const router = express.Router();
//import the burger.js model to use its database functions.
const burger = require("../models/burger.js");

//may need to include handlebars here


//create all the routes required for the application.  below based on catsController.js file in cats app
//display main page with burger database
router.get("/", function(req, res) {
    console.log("index route");
    burger.all(function(data) {
        const burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject); //burgerObject sent to index.handlebars to build html that is sent to main.handlebars and back to client for display
    });
});

//add burger to database and display when add button clicked
router.post("/api/burgers", function(req, res) { //determine api route
    burger.create([
        "name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

//ajax code to add a burger
// $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     let newBurger = {
//         burger_name: $("#burger").val().trim(),
//         devoured: $("#devoured").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//     }).then(
//         function() {
//             console.log("created new burger");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     );
// });


//update burger database and display when devour button clicked
router.put("/api/burger/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

    //ajax code to update devoured status
    // $(".update-form").on("submit", function(event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     let updatedBurger = {
    //         burger_name: $("#burger_name").val().trim(),
    //         devoured: $("#devoured").val().trim()
    //     };

    //     let id = $(this).data("id");

    //     // Send the POST request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "PUT",
    //         data: updatedBurger
    //     }).then(
    //         function() {
    //             console.log("burger devoured ");
    //             // Reload the page to get the updated list
    //             location.assign("/");
    //         }
    //     );
    // });

});

// Export routes for server.js to use.
module.exports = router;