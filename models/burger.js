const orm = require("../config/orm.js");

const burger = {
    all: function(burgers) {
        orm.selectAll("burgers", function(res) {
            burger(res);
        });
    },

    create: function(burgers, burger_name) {
        orm.insertOne("burgers", "burger_name", function(res) {
            burger(res);
        });
    },
    devour: function(burgers, id) {
        orm.updateOne("burgers", "id", function(res) {
            burger(res);
        });
    }
}

//export the database functions for the burgers_controller
module.exports = burger;
