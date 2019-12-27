const express = require("express");
// const connection = require("./config/connection.js");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const app = express();
//this needs to move to the appropriate files - make sure you import handlebars - guess is this goes in burgers_controller or orm

// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
const PORT = process.env.PORT || 8080;
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});