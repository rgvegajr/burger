const orm = require("../config/orm.js");

const burger = {
    selectAll: function(burgers) {
        orm.selectAll("burgers", function(res) {
            burgers(res);
        });
    },

    insertOne: function(burgers, burger_name) {
        orm.insertOne("burgers", "burger_name", function(res) {
            burgers(res);
        });
    },
    updateOne: function(burgers, id) {
        orm.updateOne("burgers", "id", function(res) {
            burgers(res);
        });
    }
}

//export the database functions for the controller
module.exports = burger;