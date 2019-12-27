const connection = require("../config/connection.js");

const orm = {

    selectAll: function(burgers) {
        //query db "select * from burgers;"
        //use response to generate html via handlebars files
        connection.query("SELECT * FROM burgers", function(err, res) {
            if (err) throw err;
            console.log("orm query response");
            console.log(res);
        });

    },

    insertOne: function(burgers, name, devoured) {
        //query db "insert into burgers (name, devoured) values ("burger name", 0);
        //use response to generate html via handlebars files


    },

    updateOne: function(burgers, id) {
        //query db "update burgers where id = "" " (devoured) value (1);
        //use response to generate html via handlebars files


    }

};

//export the orm object for the burgers model
module.exports = orm;