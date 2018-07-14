var mysql = require('mysql');

function login() {
    // var connection = mysql.createConnection({ - "This is the same as the below statement"
    return mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "bamazon",
        multipleStatements: true
    });
    //return connection; - belongs to the above statement
}

module.exports = {
    login: login
}