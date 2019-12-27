const connection = require("../config/connection.js"); //compare to orm example - might just be ./connection.js


//insert helper function for SQL syntax?  See example in cats app.
//
//

// Object for all our SQL statement functions.
const orm = {

    selectAll: function(table) { //compare to cats app
        //query db "select * from burgers;"
        //use response to generate html via handlebars files
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log("orm query response");
            console.log(res);
        });

    },

    insertOne: function(table, name, bdb) { //default devoured to 0, just insert new burger
        //query db "insert into burgers (name, devoured) values ("burger name", 0);
        //use response to generate html via handlebars files
        let queryString = "INSERT INTO " + table;
        queryString += " (burger_name) VALUES (";
        queryString += name;
        // queryString += printQuestionMarks(vals.length);  //see cat app for sql helper functions
        queryString += ");";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("orm query string for insert");
            bdb(result);
        });
    },

    // An example of val would be {burger_name: whatev, devoured: true}
    updateOne: function(table, val, id, bdb) {
        //query db "update burgers where id = "" " (devoured) value (1);
        //use response to generate html via handlebars files
        let queryString = "UPDATE " + table;
        queryString += " SET devoured = 1 ";
        // queryString += objToSql(val);
        queryString += " WHERE id = ";
        queryString += id;
        queryString += ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            bdb(result);
        });
    }
};

//export the orm object for the burgers model
module.exports = orm;
