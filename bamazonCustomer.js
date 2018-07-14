var mysql = require('mysql');
var registration = require("./authentication/signup");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon",
  multipleStatemets: true 
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });  


var command = process.argv[2];

var postlogin = function(username) {
    console.log("Super Welcome " + username);
    
    con.query(dlt, function(err, result) {
        if (err) throw err;
        console.log(result + "\n");
    });

    con.query(get, function(err, result) {
    if (err) throw err;
    console.log(result);
    });
}

function selctID(callback) {
    inquirer.prompt([
        {
            "id": "ID",
            "product_name": "productName", 
            "message": "What is the ID of the product you would like to buy?",
            "choices": [ "Rogue", "Warrior" ]
        }
    ]).then(answers => {
        var returnedCharacter = characterFactory("FooName", answers.charType);
        callback(returnedCharacter);
    });
}

var dlt = "DELETE from products where ID between 25 and 36"; 
var tbl = "products";
var get = "select * from " + tbl;
var insrt = "insert into " + tbl + "(product_name, department_name, price, stock_quantity) values ('Bike Seat', 'Bike', 180, 12)";
var insrt2 = "insert into " + tbl + "(product_name, department_name, price, stock_quantity) values ('Dress Shoes', 'Shoes', 200, 9)";
var upd = "update " + "set";
var sql = "select * from bamazon";



// con.query(insrt2, function(err, result) {
//     if (err) throw err;
//     console.log(result + "\n");
// });

module.exports = {
    selctID: selctID
}

switch (command) {
    case "signup":
        registration.signUp(postlogin);
        break;
}

