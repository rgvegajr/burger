const mysql = require("mysql");

//would normally use dotenv to handle keys, pws, etc
// Set the port of our application
//const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({ //creatConnection function takes in object with host, port, un, pw, db name, etc
    host: "localhost", //url where databse lives

    //     // your port; if not 3306
    port: 3306,

    //     // your username
    user: "root",

    //     //yourpassword
    password: "",

    database: "burgers_db"
});

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
        console.log(res);
        connection.end();
    });
}

module.exports = connection;
