const mysql = require("mysql");

const connection = mysql.createConnection({ //creatConnection function takes in object with host, port, un, pw, db name, etc
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

//make connection to db
connection.connect(function(err) { //before calling any other functions to query database, etc, must ensure a connection
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    // connection.end(); //closes connection to db, critical to always do...or replace this with desired function and ensure this line is included at the end of the function
    afterConnection();
});

//remove for deployment
function afterConnection() {
    connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        console.log("afterConnection query response");
        console.log(res);
        connection.end();
    });
}

module.exports = connection;
