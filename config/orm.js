//import mysql connection
const connection = require("../config/connection.js"); //compare to orm example - might just be ./connection.js

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {

    allBurgers: function(bdb) { //compare to cats app
        //query db "select * from burgers;"
        //use response to generate html via handlebars files
        // let queryString = "SELECT * FROM " + table + ";";
        let queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(queryString);
            // console.log("orm query response");
            // console.log(result);
            bdb(result);
        });
    },

    // newBurger: function(name, bdb) { //default devoured to 0, just insert new burger
    newBurger: function(burger_name, val, bdb) { //default devoured to 0, just insert new burger

        //query db "insert into burgers (name, devoured) values ("burger name", 0);
        //use response to generate html via handlebars files
        let queryString = "INSERT INTO burgers";
        queryString += " (burger_name,devoured) VALUES ('";
        queryString += val;
        // queryString += printQuestionMarks(vals.length);  //see cat app for sql helper functions
        queryString += "',0);";
        console.log("orm query string for new burger(insert)");
        console.log(burger_name);
        // console.log(objToSql(burger_name));
        console.log(val);
        // console.log(objToSql(val));
        console.log(queryString);
        connection.query(queryString, function(err, result) {

            // connection.query(queryString, burger_name, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("orm query response for insert");
            console.log(result);
            bdb(result);
        });
    },

    // An example of val would be {burger_name: whatev, devoured: true}
    devourBurger: function(val, id, bdb) {
        //query db "update burgers where id = "" " (devoured) value (1);
        //use response to generate html via handlebars files
        let queryString = "UPDATE burgers SET devoured = 1 ";
        console.log("val= " + val);
        console.log("objectToSql val= " + objToSql(val));
        console.log("id = " + id);
        console.log("objectToSql id = " + objToSql(id));
        queryString += " WHERE ";
        queryString += id;
        queryString += ";";
        console.log("orm query string for devour ");
        console.log(id);
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("orm query response for devoured:");
            console.log(result);
            bdb(result);
        });
    }
};

//export the orm object for the burgers model
module.exports = orm;