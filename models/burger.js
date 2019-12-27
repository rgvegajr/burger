const orm = require("../config/orm.js");

const burger = {
    allBurgers: function(burgers) {
        orm.selectAll("burgers", function(res) {
            burger(res);
        });
    },

    insertBurger: function(burgers, burger_name) {
        orm.insertOne("burgers", "burger_name", function(res) {
            burger(res);
        });
    },
    updateBurger: function(burgers, id) {
        orm.updateOne("burgers", "id", function(res) {
            burger(res);
        });
    }
}

//export the database functions for the burgers_controller
module.exports = burger;
