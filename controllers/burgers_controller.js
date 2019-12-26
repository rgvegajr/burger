const express = require("express");
const burger = require("./models/burger.js");
const router = express.Router();
//may need to include handlebars here


const app = express();

//create all the routes required for the application.  below based on catsController.js file in cats app
//display main page with burger database
router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject); //burgerObject sent to index.handlebars to build html that is sent to main.handlebars and back to client for display
    });
});

//add burger to database and display when add button clicked
router.post("/api/burger", function(req, res) { //determine api route
    burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


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
        }
        else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
