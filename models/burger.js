const orm = require("../config/orm.js");

const burger = {
    allBurgers: function(bdb) {
        console.log("model function call: allBurgers");
        // orm.allBurgers("burgers", function(result) {
        orm.allBurgers(function(result) {
            bdb(result);
        });
    },
    newBurger: function(burger_name, val, bdb) {
        console.log("model function call: newBurger");
        console.log(burger_name);
        console.log(val);
        orm.newBurger(burger_name, val, function(result) {
            bdb(result);
        });
    },
    devourBurger: function(val, id, bdb) {
        console.log("model function call: devourBurger");
        orm.devourBurger(val, id, function(result) {
            bdb(result);
        });
    }
}

//export the database functions for the burgers_controller
module.exports = burger;