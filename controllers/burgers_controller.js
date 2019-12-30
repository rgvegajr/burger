const express = require("express");
const router = express.Router();
//import the burger.js model to use its database functions.
const burger = require("../models/burger.js");

//may need to include handlebars here


//create all the routes required for the application.  below based on catsController.js file in cats app
//display main page with burger database
router.get("/", function(req, res) {
    console.log("index route");
    burger.allBurgers(function(data) {
        const burgerObject = {
            burgers: data
        };
        // console.log("burgerObject =");
        console.log(burgerObject);
        res.render("index", burgerObject); //burgerObject sent to index.handlebars to build html that is sent to main.handlebars and back to client for display
    });
});

//add burger to database and display when add button clicked
router.post("/", function(req, res) { //determine api route
    console.log("add a burger (post) route");
    burger.newBurger(
        ["burger_name"], [req.body.burger_name],
        function(result) {
            console.log("add burger form value: ");
            console.log(req.body.burger_name);
            // Send back the ID of the new burger
            console.log("here comes res.json:");
            res.json({ id: result.insertId }); //or newBurger object?  send back to front end
            console.log("that was res.json");
            // res.end();  //another possible test code to resolve hang
        });
    // res.redirect("/");  //testing since above action renders json object and hangs
});

//update burger database and display when devour button clicked
router.put("/:id", function(req, res) {
    console.log("devour (put) route for id: ");
    const id = "id = " + req.params.id;
    console.log(id);
    burger.devourBurger({
        devoured: req.body.devoured
    }, id, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });

});

// Export routes for server.js to use.
module.exports = router;
